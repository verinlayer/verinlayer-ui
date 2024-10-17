import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiService.interceptors.request.use(
  config => {
    // Add authorization token or other custom headers here
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiService.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Handle errors here
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error('Error response:', error.response);
    } else if (error.request) {
      // Request was made but no response received
      console.error('Error request:', error.request);
    } else {
      // Something else happened while setting up the request
      console.error('Error message:', error.message);
    }
    return Promise.reject(error);
  }
);

export default apiService;