// Example frontend code to make a login request
import axios from 'axios';

const login = async (email, password) => {
  try {
    const response = await axios.post('/api/login', { email, password });
    const token = response.data.token;
    
    // Store the token in local storage or a secure cookie
    localStorage.setItem('token', token);

    // Redirect to the user's dashboard or perform other actions
  } catch (error) {
    console.error(error);
  }
};
