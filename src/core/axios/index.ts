import axios from 'axios';

export const ApiInstance = axios.create({
  baseURL: '',
  headers: { 
    'Content-Type': 'application/json'
  },
});
