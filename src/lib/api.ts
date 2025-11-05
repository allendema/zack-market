import { getApiString } from '$lib/state.svelte.ts';

const apiClient = {
  async request(endpoint: string, { method = 'GET', body, ...kwargs }) {
    const url = new URL(endpoint, getApiString());

    try {
        const response = await fetch(url, {
            method,
            headers: {
            'Content-Type': 'application/json',
            ...(kwargs.headers || {})
            },
            body: body ? JSON.stringify(body) : null,
            ...kwargs
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response;

    } catch (error) {
        console.error('API Error: ', endpoint, error);
        throw error;
    }
  },

  get: (endpoint: string, kwargs): Promise<Response> => apiClient.request(endpoint, { method: 'GET', ...kwargs }),
  post: (endpoint: string, kwargs): Promise<Response> => apiClient.request(endpoint, { method: 'POST', ...kwargs }),
  put: (endpoint: string, kwargs): Promise<Response> => apiClient.request(endpoint, { method: 'PUT', ...kwargs }),
  delete: (endpoint: string, kwargs): Promise<Response> => apiClient.request(endpoint, { method: 'DELETE', ...kwargs })
};

export default apiClient;
