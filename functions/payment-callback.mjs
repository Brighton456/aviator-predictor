import { getStore } from '@netlify/blobs';

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ message: 'Method Not Allowed' }) };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const payload = body.response || body;

    const externalRef = payload.ExternalReference || payload.external_reference;
    const status = (payload.Status || payload.status || '').toString();
    const resultCode = payload.ResultCode;

    if (!externalRef) {
      return { statusCode: 400, body: JSON.stringify({ success: false, message: 'Missing ExternalReference' }) };
    }

    const normalized = status.toLowerCase();
    let derived = 'pending';
    if (normalized.includes('success') || normalized.includes('completed')) {
      derived = 'completed';
    } else if (normalized.includes('fail') || (typeof resultCode === 'number' && resultCode !== 0)) {
      derived = 'failed';
    }

    const store = getStore({ name: 'transactions' });
    const existing = (await store.getJSON(externalRef)) || {};

    const updated = {
      ...existing,
      status: derived,
      resultCode,
      updatedAt: new Date().toISOString(),
      rawResponse: payload,
    };

    await store.setJSON(externalRef, updated);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ received: true })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: false, message: 'Failed to process callback', error: error.message })
    };
  }
};
