import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Replace with your backend URL

export const getUserReservations = async (token) => {
  const response = await axios.get(`${API_BASE_URL}/reservations/my-reservations`, {
    headers: {
      Authorization: `Bearer ${token}`, // Add JWT token for authentication
    },
  });
  return response.data;
};
