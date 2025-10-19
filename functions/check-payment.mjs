import { getStore } from '@netlify/blobs';

export const handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: JSON.stringify({ message: 'Method Not Allowed' }) };
  }

  try {
    const { reference } = event.queryStringParameters || {};
    if (!reference) {
      return { statusCode: 400, body: JSON.stringify({ success: false, message: 'reference is required' }) };
    }

    const store = getStore({ name: 'transactions' });
    const data = await store.getJSON(reference);

    if (!data) {
      return { statusCode: 404, body: JSON.stringify({ success: false, message: 'Transaction not found' }) };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true, data })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: false, message: 'Failed to get status', error: error.message })
    };
  }
};
