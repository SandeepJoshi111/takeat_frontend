import axios, { AxiosHeaders, AxiosInstance, AxiosRequestConfig } from "axios";
import { BASE_URL } from "../constant";
import { getAccessToken } from "../utils/tokenStorage";

interface IRequestOptions {
  url: AxiosRequestConfig["url"];
  params?: AxiosRequestConfig["params"];
  method?: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
  headers?: AxiosRequestConfig["headers"];
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const request = ({
  url,
  params,
  method = "GET",
  data,
  headers = {},
}: IRequestOptions) =>
  axiosInstance({
    url,
    params,
    method,
    data,
    headers: {
      ...headers,
    },
  });
