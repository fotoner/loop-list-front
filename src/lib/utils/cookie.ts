const setCookie = (
  name: string,
  value: string,
  {
    maxAge,
    path,
  }: {
    maxAge: number;
    path: string;
  },
): void => {
  document.cookie = `${name}=${value}; max-age=${maxAge}; path=${path}`;
};

const removeCookie = (name: string): void => {
  document.cookie = `${name}=; max-age=0; path=/`;
};

const getCookie = (name: string): string | undefined => {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName.trim() === name) {
      return cookieValue;
    }
  }
  return undefined;
};

export { setCookie, removeCookie, getCookie };
