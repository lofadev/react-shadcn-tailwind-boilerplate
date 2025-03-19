import { create } from 'zustand';

import { UserModel } from '@/types';

type AuthState = {
  user: UserModel | null;
  loading: boolean;
  error: any;
};

type Actions = {
  setUser: (payload: UserModel | null) => void;
  setLoading: (payload: boolean) => void;
};

export const useAuthStore = create<AuthState & Actions>()((set) => ({
  user: null,
  loading: false,
  error: null,
  setUser: (payload) => {
    set(() => ({ user: payload }));
  },
  setLoading: (payload) => {
    set(() => ({ loading: payload }));
  },
}));
