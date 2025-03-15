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
    staleTime: 5 * 60 * 1000, // 5분 동안 데이터를 fresh 상태로 유지
    gcTime: 30 * 60 * 1000, // 30분 동안 캐시 유지
  });
};
