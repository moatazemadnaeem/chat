import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: 'https://yellow-narwhal-vest.cyclic.app/api/v1',
});