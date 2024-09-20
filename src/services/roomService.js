import axios from 'axios';

export const generateRoom = (roomId) => {
  const config = {
    url: `${import.meta.env.VITE_API_ENDPOINT}/rooms/${roomId}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return axios(config);
};
