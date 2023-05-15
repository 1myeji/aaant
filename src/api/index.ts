import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_TOKEN;

if (token === undefined) {
  throw new Error('Missing token');
}

const baseInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const apiRequest = {
  get: async (url: string) => baseInstance.get(url),
};

export default apiRequest;
