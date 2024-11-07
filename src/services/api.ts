import axios from "axios"

export const api = axios.create({
  baseURL: "http://localhost:8080/Fintech/",
  headers: { "Content-Type": "application/json" },
})
