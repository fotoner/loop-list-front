import axiosInstance from '@/lib/axios-instance';
import {
  CreatePlaylistRequest,
  PlaylistResponse,
  PlaylistsResponse,
  PlaylistsPageResponse,
} from '@/types/playlist-types';

export const createPlaylist = async (data: CreatePlaylistRequest) => {
  return axiosInstance.post<PlaylistResponse>('/playlist/create', data);
};

export const fetchPlaylistsLatest = async () => {
  return axiosInstance.get<PlaylistsResponse>('/playlist/latest');
};

export const fetchPlaylist = async (id: string) => {
  const response = await axiosInstance.get<{ data: PlaylistResponse }>(`/playlist/${id}`);
  return response.data.data;
};

export const fetchPlaylistPage = async (page: number) => {
  const response = await axiosInstance.get<PlaylistsPageResponse>(`/playlist/page?page=${page}`);
  return response.data;
};

export const fetchPlaylistByUserId = async (userId: string) => {
  const response = await axiosInstance.get<PlaylistsResponse>(`/playlist/user/${userId}`);
  return response.data;
};

export const deletePlaylist = async (id: string) => {
  const response = await axiosInstance.delete<PlaylistResponse>(`/playlist/${id}`);
  return response.data;
};
