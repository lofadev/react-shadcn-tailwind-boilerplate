export interface UserModel {
  id: string | number;
  email: string;
  fullname: string;
  username: string;
  role: RoleType;
  createdAt: string;
  updatedAt: string;
}
