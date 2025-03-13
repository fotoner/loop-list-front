import axios, { AxiosInstance } from 'axios';

import {
  errorInterceptor,
  requestInterceptor,
  responseInterceptor,
} from '@/lib/axios-instance/interceptors';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(requestInterceptor);

// 응답 인터셉터
axiosInstance.interceptors.response.use(responseInterceptor, errorInterceptor);

export default axiosInstance;
