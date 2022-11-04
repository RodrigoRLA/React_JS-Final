import axios from "axios"


export const apiLocal = axios.create({
    baseURL: "https://localhost:8080"
})