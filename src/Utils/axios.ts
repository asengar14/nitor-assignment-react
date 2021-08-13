/**
 * Implementation of Axios base request
 */
import axios from "axios";

const axiosBaseRequest = axios.create({
  baseURL: process.env.REACT_APP_JOKES_API_URL,
  responseType: "json",
});

export default axiosBaseRequest;
