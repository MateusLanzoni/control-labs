import axios from 'axios';

const API_BASE_URL = 'localhost:3000/api/v1'; // Adjust to your backend URL

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/register`, userData);
    return response.data; // Return the data from the server
  } catch (error) {
    console.error('Error during user registration:', error);
    throw error; // Re-throw the error to handle it in the component
  }
};
