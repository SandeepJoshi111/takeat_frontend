export const BASE_URL = import.meta.env.VITE_BASE_URL ?? "";
export const LOGIN_URL = `/users/login/`;
export const REGISTER_URL = `/users/register/`;

export const HttpStatusCode = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
} as const;
