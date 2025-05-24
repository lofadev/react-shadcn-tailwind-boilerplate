import { PermissionType, RoleType, USER_PERMISSIONS } from '@/constants';

export const usePermission = (userRole: RoleType) => {
  const hasPermission = (permission: PermissionType): boolean => {
    const allowedPermissions = USER_PERMISSIONS[userRole] || [];

    return allowedPermissions.includes(permission);
  };

  return { hasPermission };
};
