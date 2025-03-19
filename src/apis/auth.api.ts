import { axiosClient } from '@/configs/axios';
import { UserModel } from '@/types';
import { IResponse } from '@/types/response';
import { TLoginPayload } from '@/validations/auth.schema';

import { END_POINT } from './endpoint';

export class AuthApi {
  static me = (): Promise<IResponse<UserModel>> => axiosClient.get(END_POINT.AUTH.ME);

  static login = (payload: TLoginPayload): Promise<IResponse<UserModel & { token: string }>> =>
    axiosClient.post(END_POINT.AUTH.LOGIN, { loginID: payload.username, password: payload.password });

  static logout = (): Promise<IResponse<null>> => axiosClient.post(END_POINT.AUTH.LOGOUT);
}
