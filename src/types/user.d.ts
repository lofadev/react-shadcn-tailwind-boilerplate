export interface UserModel {
  id: string | number;
  email: string;
  fullname: string;
  username: string;
  roles: string[];
  createdAt: string;
  updatedAt: string;
}
