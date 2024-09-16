import axios from 'axios';
import { apiEndpoint } from '../helpers/helpers';

export const generateToken = (payload) => {
  const config = {
    url: `${apiEndpoint}/tokens`,
    method: 'POST',
    data: payload,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return axios(config);
};