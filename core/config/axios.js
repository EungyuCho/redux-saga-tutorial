import axios from "axios";
import { HOST, PORT } from "./baseConfig";

const client = axios.create();

export const backUrl = `${HOST}:${PORT}`;
client.defaults.baseURL = backUrl;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default clinet;
