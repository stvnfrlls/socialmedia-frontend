import axios from "axios";

// Base URL for API
axios.defaults.baseURL = "http://127.0.0.1:8000/api";

// Set other Axios configurations
axios.defaults.timeout = 10000; // Request timeout in milliseconds
axios.defaults.withCredentials = true; // Enable credentials (cookies) with requests

// Set headers for all requests (if needed)
// axios.defaults.headers.common['Authorization'] = 'Bearer your-auth-token';

export default axios;
