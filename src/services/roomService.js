import axios from 'axios';
import { apiEndpoint } from '../helpers/helpers';

export const generateRoom = (roomId) => {
  const config = {
    url: `${apiEndpoint}/rooms/${roomId}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return axios(config);
};
