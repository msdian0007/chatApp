import axios from "axios";
import { baseURL } from "../constants";

// iInstance of axios
const axiosInstance = axios.create({
  baseURL: baseURL.server,
  timeout: 40000,
  headers: {
    "Content-Type": "application/json",
  },
});

// You can also set up interceptors here if needed
// axiosInstance.interceptors.request.use(
//   config => {
//     // Do something before the request is sent, like adding auth tokens
//     return config;
//   },
//   error => {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   response => {
//     // Do something with response data
//     return response;
//   },
//   error => {
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
