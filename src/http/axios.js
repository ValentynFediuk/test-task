import axios from "axios";

export const $api = axios.create({
    baseURL: import.meta.env.VITE_X_API_BASE_URL
})