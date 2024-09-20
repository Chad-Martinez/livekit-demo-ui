import axios from 'axios';

export const generateToken = (payload) => {
  const config = {
    url: `${import.meta.env.VITE_API_ENDPOINT}/tokens`,
    method: 'POST',
    data: payload,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return axios(config);
};
