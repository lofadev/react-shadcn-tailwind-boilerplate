import { PERMISSIONS, PermissionType, ROLES, RoleType, USER_PERMISSIONS } from '../constants/roles';

export const usePermission = (userRole: RoleType) => {
  const hasPermission = (permission: PermissionType): boolean => {
    const allowedPermissions = USER_PERMISSIONS[ROLES[userRole]] || [];

    return allowedPermissions.includes(PERMISSIONS[permission]);
  };

  return { hasPermission };
};
