import axios from 'axios'

const api = axios.create({
    baseURL: 'https://private-42e99d-yuca1.apiary-mock.com/'
});

export default api;