import { axiosClient } from '@/configs/axios';
import { LOCAL_STORAGE_KEY } from '@/constants';
import { END_POINT } from '@/constants/endpoint';
import { useAuthStore, useToastStore } from '@/store';
import { IResponse, IToken, UserModel } from '@/types';
import { removeLocalStorage, setLocalStorage } from '@/utils';
import { TLoginPayload } from '@/validations/auth.schema';

export const useAuthService = () => {
  const { setUser, setLoading } = useAuthStore();
  const { setToast } = useToastStore();

  const login = async (payload: TLoginPayload) => {
    try {
      setLoading(true);
      const result: IResponse<UserModel & IToken> = await axiosClient.post(END_POINT.AUTH.LOGIN, payload);
      const { access_token, refresh_token, ...userData } = result.data;
      setUser(userData);
      setLocalStorage(LOCAL_STORAGE_KEY.ACCESS_TOKEN, access_token);
      setLocalStorage(LOCAL_STORAGE_KEY.REFRESH_TOKEN, refresh_token);
      setToast({ status: 'SUCCESS', message: result.message });
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    removeLocalStorage(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
    removeLocalStorage(LOCAL_STORAGE_KEY.REFRESH_TOKEN);
    setUser(null);
  };

  const getMe = async () => {
    try {
      setLoading(true);
      const result: IResponse<UserModel> = await axiosClient.get(END_POINT.AUTH.ME, {
        headers: {
          'Cache-Control': 'no-cache',
        },
      });
      setUser(result.data);
    } finally {
      setLoading(false);
    }
  };

  const refreshToken = async () => {
    const result: IResponse<{ access_token: string }> = await axiosClient.post(END_POINT.AUTH.REFRESH_TOKEN);

    return result.data;
  };

  return { login, logout, getMe, refreshToken };
};
