export const ROOT = "/";

export const LOGIN_PATH = "/login";

export const LOGIN_PATHS = {
  CREATE: LOGIN_PATH + "/create",
  FORGOT_PASSWORD: LOGIN_PATH + "/forgot-password",
  RESET_PASSWORD: LOGIN_PATH + "/reset-password",
};

export const PROFILE_PATH = "/profile";

export const PROFILE_PATHS = {
  MY_PHOTOS: PROFILE_PATH,
  POST_PHOTO: PROFILE_PATH + "/post-photo",
  STATS: PROFILE_PATH + "/stats",
};
