// API client — wired to backend in Phase 6.
// Frontend screens currently use mock data / local mock replies.

import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
});

/**
 * Send a chat message to the backend.
 * Not used by the UI yet — mock replies live in ChatDrawer.
 */
export async function sendChatMessage(message) {
  const response = await api.post('/api/chat', { message });
  return response.data;
}

export default api;
