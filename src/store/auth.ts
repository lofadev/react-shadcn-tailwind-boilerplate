import { create } from 'zustand';

import { UserModel } from '@/types';

type AuthState = {
  user: UserModel | null;
  isInitialized: boolean;
};

type Actions = {
  setUser: (_payload: UserModel | null) => void;
  setInitialized: (_payload: boolean) => void;
};

export const useAuthStore = create<AuthState & Actions>()((set) => ({
  user: null,
  setUser: (payload) => {
    set(() => ({ user: payload }));
  },
  isInitialized: false,
  setInitialized: (payload) => {
    set(() => ({ isInitialized: payload }));
  },
}));
