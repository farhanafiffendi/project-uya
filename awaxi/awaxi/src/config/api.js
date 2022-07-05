// Create API Config here ...
import axios from 'axios';

export const API = axios.create({
    baseURL: 'https://awaxii.pocari.id/dev/',
});

export const setAuthToken = (token) => {
    if (token) {
        API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete API.defaults.headers.commin['Authorization'];
    }
};