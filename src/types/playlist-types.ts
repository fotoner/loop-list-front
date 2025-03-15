import { ApiResponse, Page } from './api-types';

export interface TagData {
  tagId: number;
  name: string;
}

export interface SongData {
  id: number;
  title: string;
  artist: string;
  bpm?: string;
  genre?: string;
}

export interface PlaylistData {
  id: number;
  title: string;
  description: string | null;
  cover: string | null;
  tags: string[];
  songs: SongData[] | null;
  username: string;
  userId: string;
  createdAt: string;
}

export type PlaylistResponse = PlaylistData;
export type PlaylistsResponse = ApiResponse<PlaylistData[]>;
export type TagResponse = ApiResponse<TagData>;
export type SongResponse = ApiResponse<SongData>;

export interface CreatePlaylistRequest {
  title: string;
  description?: string;
  cover?: string;
  songs: {
    title: string;
    artist: string;
  }[];
  tags: string[];
}

export interface PlaylistsPageResponse {
  message: string;
  data: Page<PlaylistData>;
  code: number;
}
