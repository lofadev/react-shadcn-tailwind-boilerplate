import axios, { AxiosError, AxiosInstance, AxiosResponse, CreateAxiosDefaults } from 'axios';

import { LOCAL_STORAGE_KEY, SYSTEM_ERROR } from '@/constants';
import { getLocalStorage } from '@/utils';

import { envConfig } from './env';

const createAxiosInstance = (
  baseURL: string,
  configs: CreateAxiosDefaults = { timeout: 10000, timeoutErrorMessage: SYSTEM_ERROR.TIMEOUT_ERROR.MESSAGE },
): AxiosInstance => {
  const instance = axios.create({ baseURL, ...configs });

  // Request Interceptor
  instance.interceptors.request.use(
    (config) => {
      const token = getLocalStorage(LOCAL_STORAGE_KEY.TOKEN);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error: AxiosError) => Promise.reject(error),
  );

  // Response Interceptor
  instance.interceptors.response.use(
    (response: AxiosResponse) => response.data,
    (error: AxiosError) => {
      if (error.response) {
        return Promise.reject(error.response.data);
      }

      return Promise.reject(error);
    },
  );

  return instance;
};

const axiosClient = createAxiosInstance(envConfig.VITE_API_URL);

export { axiosClient };
