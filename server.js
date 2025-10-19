require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const crypto = require('crypto');

const app = express();
app.use(cors());
app.use(express.json());

// PayHero Configuration
const PAYHERO_CONFIG = {
  BASE_URL: 'https://backend.payhero.co.ke/api/v2',
  CHANNEL_ID: process.env.PAYHERO_CHANNEL_ID || '3100',
  ACCOUNT_ID: process.env.PAYHERO_CHANNEL_ID || '3100',
  AUTH: 'Basic ' + Buffer.from(`${process.env.PAYHERO_USERNAME}:${process.env.PAYHERO_API_PASSWORD}`).toString('base64')
};

// In-memory store for transaction statuses
const transactionStatuses = new Map();

// Generate a unique reference
function generateReference() {
  return 'AP' + Date.now() + Math.random().toString(36).substr(2, 5).toUpperCase();
}

// Initiate STK Push
app.post('/api/initiate-payment', async (req, res) => {
  try {
    const { phone } = req.body;
    const amount = 500; // Fixed amount
    const externalRef = generateReference();
    
    // Format phone number (ensure it starts with 254)
    const formattedPhone = phone.startsWith('0') ? '254' + phone.substring(1) : 
                         phone.startsWith('+254') ? phone.substring(1) : 
                         phone.startsWith('254') ? phone : '254' + phone;

    const payload = {
      channel_id: PAYHERO_CONFIG.CHANNEL_ID,
      amount: amount,
      phone_number: formattedPhone,
      external_reference: externalRef,
      callback_url: 'https://pro-aviator-predictor-analytics.windsurf.build/api/payment-callback',
      provider: 'm-pesa'
    };

    const response = await axios.post(
      `${PAYHERO_CONFIG.BASE_URL}/payments`,
      payload,
      {
        headers: {
          'Authorization': PAYHERO_CONFIG.AUTH,
          'Content-Type': 'application/json'
        }
      }
    );

    // Store the initial transaction status
    transactionStatuses.set(externalRef, {
      status: 'pending',
      phone: formattedPhone,
      amount,
      timestamp: new Date().toISOString(),
      checkoutRequestId: response.data.checkoutRequestID
    });

    res.json({
      success: true,
      message: 'Payment initiated successfully',
      data: {
        reference: externalRef,
        checkoutRequestId: response.data.checkoutRequestID
      }
    });

  } catch (error) {
    console.error('Payment initiation error:', error.response?.data || error.message);
    res.status(500).json({
      success: false,
      message: error.response?.data?.message || 'Failed to initiate payment',
      error: error.response?.data || error.message
    });
  }
});

// Check payment status
app.get('/api/check-payment/:reference', (req, res) => {
  const { reference } = req.params;
  const transaction = transactionStatuses.get(reference);
  
  if (!transaction) {
    return res.status(404).json({
      success: false,
      message: 'Transaction not found'
    });
  }

  res.json({
    success: true,
    data: transaction
  });
});

// Payment callback endpoint
app.post('/api/payment-callback', (req, res) => {
  try {
    const { response } = req.body;
    const { ExternalReference: externalRef, Status: status, ResultCode: resultCode } = response || {};
    
    if (externalRef && transactionStatuses.has(externalRef)) {
      const transaction = transactionStatuses.get(externalRef);
      transaction.status = status.toLowerCase();
      transaction.resultCode = resultCode;
      transaction.updatedAt = new Date().toISOString();
      transaction.rawResponse = response;
      
      // Update the transaction status
      transactionStatuses.set(externalRef, transaction);
      
      console.log(`Payment status updated for ${externalRef}:`, status);
    }
    
    res.status(200).json({ received: true });
  } catch (error) {
    console.error('Callback processing error:', error);
    res.status(500).json({ error: 'Failed to process callback' });
  }
});

// Submit WhatsApp number after successful payment
app.post('/api/submit-whatsapp', (req, res) => {
  const { reference, whatsappNumber } = req.body;
  
  if (!transactionStatuses.has(reference)) {
    return res.status(404).json({
      success: false,
      message: 'Transaction not found'
    });
  }
  
  const transaction = transactionStatuses.get(reference);
  transaction.whatsappNumber = whatsappNumber;
  transaction.whatsappSubmittedAt = new Date().toISOString();
  
  // Here you would typically trigger the WhatsApp message with the APK link
  console.log(`WhatsApp number ${whatsappNumber} received for transaction ${reference}`);
  
  res.json({
    success: true,
    message: 'WhatsApp number received. You will receive the APK shortly.'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
