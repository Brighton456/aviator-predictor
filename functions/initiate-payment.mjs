import axios from 'axios';
import { getStore } from '@netlify/blobs';

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ message: 'Method Not Allowed' }) };
  }

  try {
    const { phone } = JSON.parse(event.body || '{}');
    if (!phone) {
      return { statusCode: 400, body: JSON.stringify({ success: false, message: 'Phone is required' }) };
    }

    const amount = 500;

    const formatPhone = (p) => {
      if (!p) return '';
      const raw = p.replace(/\D/g, '');
      if (raw.startsWith('0')) return `254${raw.substring(1)}`;
      if (raw.startsWith('254')) return raw;
      if (raw.startsWith('7')) return `254${raw}`;
      if (raw.startsWith('1')) return `254${raw}`;
      return raw;
    };

    const formattedPhone = formatPhone(phone);

    const username = process.env.PAYHERO_USERNAME;
    const password = process.env.PAYHERO_API_PASSWORD;
    const channelId = process.env.PAYHERO_CHANNEL_ID;

    if (!username || !password || !channelId) {
      return {
        statusCode: 500,
        body: JSON.stringify({ success: false, message: 'Missing PayHero credentials in env' })
      };
    }

    const externalRef = 'AP' + Date.now() + Math.random().toString(36).substr(2, 5).toUpperCase();

    const siteUrl = process.env.URL || process.env.DEPLOY_URL || '';
    const callbackUrl = `${siteUrl}/.netlify/functions/payment-callback`;

    const payload = {
      channel_id: Number(channelId),
      amount: amount,
      phone_number: formattedPhone,
      external_reference: externalRef,
      callback_url: callbackUrl,
      provider: 'm-pesa'
    };

    const basic = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');

    const response = await axios.post(
      'https://backend.payhero.co.ke/api/v2/payments',
      payload,
      {
        headers: {
          Authorization: basic,
          'Content-Type': 'application/json'
        },
        timeout: 20000
      }
    );

    const data = response.data || {};
    const checkoutRequestId = data.CheckoutRequestID || data.checkoutRequestID || null;

    const store = getStore({ name: 'transactions' });
    await store.setJSON(externalRef, {
      status: 'pending',
      phone: formattedPhone,
      amount,
      timestamp: new Date().toISOString(),
      checkoutRequestId,
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: true,
        message: 'Payment initiated successfully',
        data: { reference: externalRef, checkoutRequestId }
      })
    };
  } catch (error) {
    const detail = error.response?.data || { message: error.message };
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: false, message: 'Failed to initiate payment', error: detail })
    };
  }
};
