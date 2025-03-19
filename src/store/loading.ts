import { create } from 'zustand';

type LoadingState = {
  loading: boolean;
  loadings: string[];
};

type Actions = {
  setLoading: (payload: boolean) => void;
  setLoadings: (payload: string[]) => void;
};

export const useLoadingStore = create<LoadingState & Actions>()((set) => ({
  loading: false,
  loadings: [],
  setLoading: (payload) => {
    set(() => ({ loading: payload }));
  },
  setLoadings: (payload) => {
    set(() => ({ loadings: payload }));
  },
}));
