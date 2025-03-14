import { ApiResponse } from './api-types';

export interface UserResponseData {
  userId: number;
  username: string;
  email: string;
  isPublic: boolean;
  introduce: string;
  picture: string;
  socialLink: string;
}

export type UserResponse = ApiResponse<UserResponseData>;
