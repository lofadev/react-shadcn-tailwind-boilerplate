import { LOCAL_STORAGE_KEY } from '@/constants';

export interface IToken {
  [LOCAL_STORAGE_KEY.ACCESS_TOKEN]: string;
  [LOCAL_STORAGE_KEY.REFRESH_TOKEN]: string;
}
