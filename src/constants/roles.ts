export type RoleType = 'USER' | 'ADMIN';

export const ROLES: Record<RoleType, RoleType> = {
  USER: 'USER',
  ADMIN: 'ADMIN',
};

export const PERMISSIONS = {
  VIEW_HOME: 'VIEW_HOME',
};

export type PermissionType = keyof typeof PERMISSIONS;

export const USER_PERMISSIONS: Record<RoleType, PermissionType[]> = {
  USER: ['VIEW_HOME'],
  ADMIN: [],
};
