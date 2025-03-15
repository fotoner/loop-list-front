import { useMutation, useQuery, useInfiniteQuery, InfiniteData } from '@tanstack/react-query';
import {
  createPlaylist,
  fetchPlaylistsLatest,
  fetchPlaylist,
  fetchPlaylistPage,
  fetchPlaylistByUserId,
} from './playlist-service';
import { PlaylistData } from '@/types/playlist-types';
import { Page } from '@/types/api-types';

export const useCreatePlaylist = () => {
  return useMutation({
    mutationFn: createPlaylist,
  });
};

export const useFetchPlaylistsLatest = () => {
  return useQuery({
    queryKey: ['playlists', 'latest'],
    queryFn: fetchPlaylistsLatest,
  });
};

export const useFetchPlaylist = (id?: string) => {
  return useQuery({
    queryKey: ['playlist', id],
    queryFn: () => fetchPlaylist(id!),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5분 동안 데이터를 fresh 상태로 유지
    gcTime: 30 * 60 * 1000, // 30분 동안 캐시 유지
  });
};

export const useFetchPlaylistPage = () => {
  return useInfiniteQuery<
    Page<PlaylistData>,
    Error,
    InfiniteData<Page<PlaylistData>>,
    string[],
    number
  >({
    queryKey: ['playlists', 'page'],
    initialPageParam: 0,
    queryFn: ({ pageParam }) => fetchPlaylistPage(pageParam).then((res) => res.data),
    getNextPageParam: (lastPage) => {
      if (lastPage.last) return undefined;
      return lastPage.number + 1;
    },
  });
};

export const useFetchPlaylistByUserId = (userId: string) => {
  return useQuery({
    queryKey: ['playlists', 'user', userId],
    queryFn: () => fetchPlaylistByUserId(userId),
  });
};
