import React, { useState, useEffect, useRef } from 'react';
import { X, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const PaymentFlow = ({ onClose }) => {
  const [step, setStep] = useState('phone'); // phone -> payment -> success -> whatsapp
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [reference, setReference] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('pending');
  const [countdown, setCountdown] = useState(120); // 2 minutes countdown

  const functionsBase = '/.netlify/functions';
  const statusIntervalRef = useRef(null);
  const countdownIntervalRef = useRef(null);

  // Handle phone number submission
  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    if (!phone) {
      setError('Please enter your phone number');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch(`${functionsBase}/initiate-payment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to initiate payment');
      }

      setReference(data.data.reference);
      setStep('payment');
      startPaymentStatusCheck(data.data.reference);
      startCountdown();
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle WhatsApp submission
  const handleWhatsappSubmit = async (e) => {
    e.preventDefault();
    if (!whatsapp) {
      setError('Please enter your WhatsApp number');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch(`${functionsBase}/submit-whatsapp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reference, whatsappNumber: whatsapp })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to submit WhatsApp number');
      }

      setStep('success');
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Start payment status check
  const startPaymentStatusCheck = (ref) => {
    const checkStatus = async () => {
      try {
        const response = await fetch(`${functionsBase}/check-payment?reference=${encodeURIComponent(ref)}`);
        const data = await response.json();
        
        if (data.success && data.data) {
          if (data.data.status === 'completed') {
            setPaymentStatus('completed');
            setStep('whatsapp');
            if (statusIntervalRef.current) clearInterval(statusIntervalRef.current);
            if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
          } else if (data.data.status === 'failed') {
            setPaymentStatus('failed');
            setError('Payment failed. Please try again.');
            if (statusIntervalRef.current) clearInterval(statusIntervalRef.current);
            if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
          }
        }
      } catch (err) {
        console.error('Error checking payment status:', err);
      }
    };
    
    statusIntervalRef.current = setInterval(checkStatus, 5000);
    return statusIntervalRef.current;
  };

  // Start countdown
  const startCountdown = () => {
    let timeLeft = 120;
    
    countdownIntervalRef.current = setInterval(() => {
      timeLeft -= 1;
      setCountdown(timeLeft);
      
      if (timeLeft <= 0) {
        if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
        if (paymentStatus === 'pending') {
          setPaymentStatus('timeout');
          setError('Payment timed out. Please try again.');
        }
      }
    }, 1000);
    
    return countdownIntervalRef.current;
  };

  // Format countdown
  const formatCountdown = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Render current step
  const renderStep = () => {
    switch (step) {
      case 'phone':
        return (
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Enter Your Phone Number</h3>
            <p className="text-gray-600 mb-6">We'll send an M-Pesa STK Push to complete your payment of KES 500</p>
            
            <form onSubmit={handlePhoneSubmit} className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">+254</span>
                </div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  placeholder="712345678"
                  className="w-full pl-16 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  maxLength="9"
                  required
                />
              </div>
              
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin mr-2" />
                    Processing...
                  </>
                ) : (
                  'Proceed to Payment'
                )}
              </button>
            </form>
            
            <p className="mt-4 text-sm text-gray-500">
              By proceeding, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        );
        
      case 'payment':
        return (
          <div className="text-center">
            <div className="bg-blue-50 p-4 rounded-xl mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Processing</h3>
              <p className="text-blue-700 mb-2">Reference: {reference}</p>
              <p className="text-sm text-blue-600">Preparing confirmation...</p>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-center mb-4">
                <AlertCircle className="w-5 h-5 mr-2" />
                {error}
              </div>
            )}

            <button
              onClick={() => setStep('phone')}
              className="text-sm text-gray-600 hover:text-gray-800 mt-4 inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to phone number
            </button>
          </div>
        );
        
      case 'whatsapp':
        return (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Payment Successful!</h3>
            <p className="text-gray-600 mb-6">Please provide your WhatsApp number to receive the APK</p>
            
            <form onSubmit={handleWhatsappSubmit} className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">+254</span>
                </div>
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value.replace(/\D/g, ''))}
                  placeholder="712345678"
                  className="w-full pl-16 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  maxLength="9"
                  required
                />
              </div>
              
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  'Send APK to WhatsApp'
                )}
              </button>
            </form>
            
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg text-left text-sm text-yellow-800">
              <p className="font-medium mb-1">Didn't receive the APK?</p>
              <p className="text-xs">If you don't receive the APK within 5 minutes, please contact support with your payment reference: <span className="font-mono">{reference}</span></p>
            </div>
          </div>
        );
        
      case 'success':
        return (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">All Set!</h3>
            <p className="text-gray-600 mb-6">We've sent the APK and installation guide to your WhatsApp</p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
              <p className="font-medium text-gray-800 mb-1">What's next?</p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                <li>Check your WhatsApp messages</li>
                <li>Download and install the APK</li>
                <li>Follow the setup guide</li>
                <li>Start predicting and winning!</li>
              </ul>
            </div>
            
            <button
              onClick={onClose}
              className="mt-4 text-sm text-gray-600 hover:text-gray-800 inline-flex items-center"
            >
              <span>Close</span>
            </button>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        
        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="px-6 py-8 sm:p-8">
            <div className="absolute top-0 right-0 pt-4 pr-4">
              <button
                onClick={onClose}
                className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <span className="sr-only">Close</span>
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="mt-4">
              {renderStep()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFlow;
