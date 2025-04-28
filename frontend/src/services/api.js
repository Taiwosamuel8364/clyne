const API_URL = 'http://localhost:4000/api';

export const fetchWelcomeMessage = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error('Error fetching welcome message:', error);
    throw error;
  }
};