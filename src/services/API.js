import axios from 'axios';
const API_KEY = '48593f081e5bf66c347661da3668026e'
export const API = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5`
})