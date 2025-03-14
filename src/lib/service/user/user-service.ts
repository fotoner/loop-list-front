import axiosInstance from '@/lib/axios-instance';
import { UserResponse } from '@/types/user-types';

export const fetchMe = async () => {
  return axiosInstance.get<UserResponse>('/user/me');
};

export const fetchUser = async (id: string) => {
  return axiosInstance.get<UserResponse>(`/user/${id}`);
};
