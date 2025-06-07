import axios from "axios";

const BASE_URL = "https://app.wewantwaste.co.uk/api";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor for any global request handling
api.interceptors.request.use(
  (config) => {
    // You can add auth tokens here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for any global response handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global error responses here
    return Promise.reject(error);
  }
);
