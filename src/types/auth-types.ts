import { ApiResponse } from './api-types';

export interface LoginResponseData {
  accessToken: string;
}

export type LoginResponse = ApiResponse<LoginResponseData>;

export interface ReissueTokenResponseData {
  accessToken: string;
  refreshToken: string;
}

export type ReissueTokenResponse = ApiResponse<ReissueTokenResponseData>;
