import { accessTokenConfig } from '@/lib/service/auth/constants';
import { getCookie, removeCookie, setCookie } from '@/lib/utils/cookie';

const setAccessToken = (accessToken: string | undefined): void => {
  if (!accessToken) {
    removeCookie(accessTokenConfig.name);
    return;
  }
  setCookie(accessTokenConfig.name, accessToken, {
    maxAge: accessTokenConfig.expiration,
    path: '/',
  });
};

const removeAccessToken = (): void => {
  removeCookie(accessTokenConfig.name);
};

const getAccessToken = (): string | undefined => {
  return getCookie(accessTokenConfig.name);
};

const token = {
  accessToken: {
    set: setAccessToken,
    remove: removeAccessToken,
    get: getAccessToken,
  },
};

export default token;
