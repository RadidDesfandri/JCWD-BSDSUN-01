const AUTH_KEY_REDIS = {
  USER: (userId: number) => `auth:user:${userId}`,
};

export { AUTH_KEY_REDIS };
