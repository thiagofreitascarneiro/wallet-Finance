import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: "http://localhost:8080"
})

export const api = {
    get(endpoint) {
        return axiosInstance.get(endpoint);
    },
    post(endpoint, body) {
        return axiosInstance.post(endpoint, body);
    }
}

export function getZipCode(zipcode) {
    return axios.get(`https://viacep.com.br/ws/${zipcode}/json/`);
}