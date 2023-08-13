const permission1 = { canView: false, canDelete: false };
const permission2 = { canUpdate: true, canCreate: true };
const permission3 = { canCreate: false, canDelete: true };
const permission4 = { canView: true };

const permissions = [permission1, permission2, permission3, permission4];

const mergedPermission = {};

permissions.forEach(permission => {
  for (const key in permission) {
    mergedPermission[key] = permission[key];
  }
});

console.log(mergedPermission);
