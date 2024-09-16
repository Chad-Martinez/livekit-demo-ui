import axios from 'axios';

export const generateToken = (userName) => {

    const config = {
        url: `${import.meta.env.VITE_API_ENDPOINT}/tokens/${userName}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    return axios(config);
}