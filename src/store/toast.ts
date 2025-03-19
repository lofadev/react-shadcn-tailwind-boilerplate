import { create } from 'zustand';

export type TToast = {
  status: 'ERROR' | 'SUCCESS';
  message: string;
};

type ToastState = {
  toast: TToast | null;
};

type Actions = {
  setToast: (payload: TToast | null) => void;
};

export const useToastStore = create<ToastState & Actions>()((set) => ({
  toast: null,
  setToast(payload) {
    set(() => ({ toast: payload }));
  },
}));
