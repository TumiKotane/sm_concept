import axios from "axios";

export const API_URL = "http://localhost:3001/api";


const createInstance = (baseUrl) => {
  const instance = axios.create({
    baseURL: baseUrl,
    headers: { "Content-Type": "application/json" },
  });
  return instance;
};

export default createInstance(API_URL);
