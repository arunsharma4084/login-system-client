import axios from "axios"

export const clientAPI = axios.create({baseURL:"http://localhost:3000"})
