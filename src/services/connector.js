import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL || 'https://itunes.apple.com/search'
});
