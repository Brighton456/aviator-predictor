import { getStore } from '@netlify/blobs';

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ message: 'Method Not Allowed' }) };
  }

  try {
    const { reference, whatsappNumber } = JSON.parse(event.body || '{}');

    if (!reference || !whatsappNumber) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, message: 'reference and whatsappNumber are required' })
      };
    }

    const store = getStore({ name: 'transactions' });
    const existing = (await store.getJSON(reference)) || {};

    const updated = {
      ...existing,
      whatsappNumber,
      whatsappSubmittedAt: new Date().toISOString(),
    };

    await store.setJSON(reference, updated);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: false, message: 'Failed to submit WhatsApp number', error: error.message })
    };
  }
};
