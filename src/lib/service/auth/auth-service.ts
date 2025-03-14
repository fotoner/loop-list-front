import token from '@/lib/service/auth/token';
import { LoginResponse, ReissueTokenResponse } from '@/types/auth-types';
import axios from 'axios';

export const login = async (code: string) => {
  return axios.post<LoginResponse>(
    `${import.meta.env.VITE_API_URL}/auth/login`,
    { code: code },
    {
      withCredentials: true,
    },
  );
};

export const logout = async () => {
  const accessToken = token.accessToken.get();
  return axios.post<void>(`${import.meta.env.VITE_API_URL}/auth/logout`, null, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    withCredentials: true,
  });
};

export const reissueToken = async () => {
  return axios.get<ReissueTokenResponse>(`${import.meta.env.VITE_API_URL}/auth/reissue`, {
    withCredentials: true,
  });
};
