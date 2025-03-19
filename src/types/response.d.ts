export interface IResponse<T> {
  status: 'ERROR' | 'SUCCESS';
  message: string;
  data: T;
}
