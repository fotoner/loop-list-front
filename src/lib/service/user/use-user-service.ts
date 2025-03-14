import { useQuery } from '@tanstack/react-query';
import { fetchMe, fetchUser } from './user-service';
import token from '@/lib/service/auth/token';

export const useUserProfile = () => {
  return useQuery({
    queryKey: ['me'],
    queryFn: () => fetchMe(),
    enabled: !!token.accessToken.get(),
  });
};

export const useUser = (id: string) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => fetchUser(id),
  });
};
