import axios from 'axios';
import firebaseRequests from './requests.js';

export const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_FIREBASE_URL}/.json`,
});
export const config = () => ({
  headers: {
    'Accept-Language': 'pt-BR',
    'Content-Type': 'application/json',
  },
});

export const fbRequests = firebaseRequests({ instance: axiosInstance, config });
