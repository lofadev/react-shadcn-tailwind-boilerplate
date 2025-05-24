import { create } from 'zustand';

import { UserModel } from '@/types';

type AuthState = {
  user: UserModel | null;
};

type Actions = {
  setUser: (payload: UserModel | null) => void;
};

export const useAuthStore = create<AuthState & Actions>()((set) => ({
  user: null,
  setUser: (payload) => {
    set(() => ({ user: payload }));
  },
}));
