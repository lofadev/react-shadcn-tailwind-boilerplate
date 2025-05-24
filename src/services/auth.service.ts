import { toast } from 'sonner';

import { axiosClient } from '@/configs';
import { END_POINT, LOCAL_STORAGE_KEY } from '@/constants';
import { useAuthStore } from '@/store';
import { IResponse, IToken, UserModel } from '@/types';
import { removeLocalStorage, setLocalStorage } from '@/utils';
import { TLoginPayload } from '@/validations';

export const useAuthService = () => {
  const { setUser } = useAuthStore();

  const login = async (payload: TLoginPayload) => {
    const result: IResponse<UserModel & IToken> = await axiosClient.post(END_POINT.AUTH.LOGIN, payload);
    const { access_token, refresh_token, ...userData } = result.data;
    setUser(userData);
    setLocalStorage(LOCAL_STORAGE_KEY.ACCESS_TOKEN, access_token);
    setLocalStorage(LOCAL_STORAGE_KEY.REFRESH_TOKEN, refresh_token);
    toast.success(result.message);
  };

  const logout = () => {
    removeLocalStorage(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
    removeLocalStorage(LOCAL_STORAGE_KEY.REFRESH_TOKEN);
    setUser(null);
  };

  const getMe = async () => {
    const result: IResponse<UserModel> = await axiosClient.get(END_POINT.AUTH.ME, {
      headers: {
        'Cache-Control': 'no-cache',
      },
    });
    setUser(result.data);
  };

  const refreshToken = async () => {
    const result: IResponse<{ access_token: string }> = await axiosClient.post(END_POINT.AUTH.REFRESH_TOKEN);

    return result.data;
  };

  return { login, logout, getMe, refreshToken };
};
