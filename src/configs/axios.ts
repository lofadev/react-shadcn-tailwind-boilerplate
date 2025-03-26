import axios, { AxiosError, AxiosInstance, AxiosResponse, CreateAxiosDefaults } from 'axios';
import { toast } from 'sonner';

import { LOCAL_STORAGE_KEY, SYSTEM_ERROR } from '@/constants';
import { END_POINT } from '@/constants/endpoint';
import { IResponse } from '@/types';
import { getLocalStorage, removeLocalStorage, setLocalStorage } from '@/utils';

import { envConfig } from './env';

let refreshTokenPromise: Promise<void> | null = null;

const createAxiosInstance = (
  baseURL: string,
  configs: CreateAxiosDefaults = { timeout: 15000, timeoutErrorMessage: SYSTEM_ERROR.TIMEOUT_ERROR.MESSAGE },
): AxiosInstance => {
  const instance = axios.create({ baseURL, ...configs });

  // Request Interceptor
  instance.interceptors.request.use(
    (config) => {
      const token = getLocalStorage(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
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
      const originalRequest = error.config;

      if (error.response?.status === 410 && originalRequest) {
        if (!refreshTokenPromise) {
          const refresh_token = getLocalStorage(LOCAL_STORAGE_KEY.REFRESH_TOKEN);
          refreshTokenPromise = instance
            .post(END_POINT.AUTH.REFRESH_TOKEN, { refresh_token })
            .then((res) => {
              const { access_token } = res.data;
              setLocalStorage(LOCAL_STORAGE_KEY.ACCESS_TOKEN, access_token);
            })
            .catch((_error) => {
              removeLocalStorage(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
              removeLocalStorage(LOCAL_STORAGE_KEY.REFRESH_TOKEN);

              return Promise.reject(_error);
            })
            .finally(() => {
              refreshTokenPromise = null;
            });
        }

        return refreshTokenPromise.then(() => instance(originalRequest));
      }

      if (error.response?.status !== 410) {
        if (error.response?.status === 401) {
          removeLocalStorage(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
          removeLocalStorage(LOCAL_STORAGE_KEY.REFRESH_TOKEN);
        }
        const { message } = error.response?.data as IResponse<null>;
        if (message) {
          toast.error(message);
        }
      }

      return Promise.reject(error);
    },
  );

  return instance;
};

const axiosClient = createAxiosInstance(envConfig.VITE_API_URL);

export { axiosClient };
