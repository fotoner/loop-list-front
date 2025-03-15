import axiosInstance from '@/lib/axios-instance';

import { reissueToken } from '@/lib/service/auth/auth-service';
import token from '@/lib/service/auth/token';

import {
  type AxiosResponse,
  type AxiosRequestConfig,
  type InternalAxiosRequestConfig,
  type AxiosError,
} from 'axios';

interface RetryQueueItem {
  resolve: (value?: AxiosResponse) => void;
  reject: (error?: Error) => void;
  config: AxiosRequestConfig;
}

const refreshAndRetryQueue: RetryQueueItem[] = [];

let isRefreshing = false;

export const requestInterceptor = (request: InternalAxiosRequestConfig) => {
  const accessToken = token.accessToken.get();
  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`;
  }
  return request;
};

export const responseInterceptor = (response: AxiosResponse<unknown, unknown>) => {
  return response;
};

export const errorInterceptor = async (error: AxiosError) => {
  const originalRequest = error.config;
  if (!originalRequest) return Promise.reject(error);

  console.log('intercepting response', error);
  if (error.status === 401 || error.status === 403) {
    if (!isRefreshing) {
      isRefreshing = true;

      try {
        // reissue token
        const response = await reissueToken();

        if (response.status !== 200) {
          throw new Error('Failed to reissue token');
        }

        const { accessToken: newAccessToken } = response.data.data;

        // update token
        token.accessToken.set(newAccessToken);

        // update original request
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        // retry original request
        refreshAndRetryQueue.forEach(({ config, resolve, reject }) => {
          axiosInstance
            .request(config)
            .then((response) => resolve(response))
            .catch((err) => reject(err));
        });
        refreshAndRetryQueue.length = 0;

        // retry request
        return axiosInstance(originalRequest);
      } catch {
        throw new Error('Failed to reissue token');
      } finally {
        // eslint-disable-next-line require-atomic-updates
        isRefreshing = false;
      }
    }

    return new Promise((resolve, reject) => {
      refreshAndRetryQueue.push({ resolve, reject, config: originalRequest });
    });
  }

  return Promise.reject(error);
};
