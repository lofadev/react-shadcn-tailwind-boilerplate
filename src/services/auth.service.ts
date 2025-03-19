import { AuthApi } from '@/apis/auth.api';
import { LOCAL_STORAGE_KEY } from '@/constants';
import { useAuthStore, useToastStore } from '@/store';
import { handleApiError, removeLocalStorage, setLocalStorage } from '@/utils';
import { TLoginPayload } from '@/validations/auth.schema';

export const useAuthService = () => {
  const { setUser, setLoading } = useAuthStore();
  const { setToast } = useToastStore();

  const login = async (payload: TLoginPayload) => {
    try {
      setLoading(true);
      const result = await AuthApi.login(payload);
      setUser(result.data);
      setLocalStorage(LOCAL_STORAGE_KEY.TOKEN, result.data.token);
      setToast({ status: 'SUCCESS', message: result.message });

      return result.data;
    } catch (error) {
      handleApiError(error, setToast);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      const result = await AuthApi.logout();
      const { data } = result;
      setUser(data);
      removeLocalStorage(LOCAL_STORAGE_KEY.TOKEN);
    } catch (error) {
      handleApiError(error, setToast);
    } finally {
      setLoading(false);
    }
  };

  const getMe = async () => {
    try {
      setLoading(true);
      const result = await AuthApi.me();
      setUser(result.data);

      return result.data;
    } catch (error) {
      handleApiError(error, setToast);
    } finally {
      setLoading(false);
    }
  };

  return { login, logout, getMe };
};
