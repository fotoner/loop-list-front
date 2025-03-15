import React from 'react';
import styled from '@emotion/styled';
import { color, fontSize, fontWeight, layoutWidth, lineHeight, spacing } from '@/styles/base';
import Twitter from '@/assets/icons/x.svg';
import AlbumCover from '@/assets/image.png';
import PlaylistCard, { PlaylistGrid } from '@/components/playlist/PlaylistCard';
import { LinkButton } from '@/components/common/Button';
import { useUserProfile } from '@/lib/service/user/use-user-service';
import { useFetchPlaylistsLatest } from '@/lib/service/playlist/use-playlist-service';
import { PlaylistData } from '@/types/playlist-types';

const TemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainInfo = styled.div`
  width: 100%;
  height: ${spacing[56]};
  background-color: ${color['primary-900']};
  color: ${color['gray-30']};
  .gap {
    height: ${spacing[2]};
  }
  h1 {
    line-height: ${lineHeight['1.4']};
    font-size: ${fontSize['2xl']};
  }
  h2 {
    font-size: ${fontSize['xl']};
    font-weight: ${fontWeight.regular};
  }
`;

const MainInfoContainer = styled.div`
  margin: auto;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  max-width: ${layoutWidth};
  padding: 0 ${fontSize.base};
  width: 100%;
`;

const LayoutContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  max-width: ${layoutWidth};
  padding: ${fontSize.base};
  width: 100%;
`;

const MainPage: React.FC = () => {
  const { data: playlists } = useFetchPlaylistsLatest();
  const { data: user } = useUserProfile();
  const handleLogin = () => {};

  return (
    <TemplateWrapper>
      <MainInfo>
        <MainInfoContainer>
          <h1>Event, History, Share</h1>
          <h2>rekordbox 플레이리스트를 손쉽게 기록하고 공유해보세요</h2>
          <div className='gap'></div>
          {user ? (
            <LinkButton to='/playlists/create' width={spacing[45]}>
              플레이리스트 만들기
            </LinkButton>
          ) : (
            <LinkButton to='/login' width={spacing[35]} onClick={handleLogin}>
              <img src={Twitter} alt='' />로 로그인하기
            </LinkButton>
          )}
        </MainInfoContainer>
      </MainInfo>
      <LayoutContainer>
        <h1>최신 플레이리스트</h1>
        <PlaylistGrid>
          {playlists?.data?.data?.map((playlist: PlaylistData) => (
            <PlaylistCard
              key={playlist.id}
              id={playlist.id}
              coverImage={playlist.cover || AlbumCover}
              title={playlist.title}
              author={playlist.username}
              date={new Date(playlist.createdAt).toLocaleDateString()}
              tags={playlist.tags}
            />
          ))}
          <PlaylistCard
            variant='more'
            title='더 보기'
            onClick={() => {
              /* 더보기 페이지로 이동 */
            }}
          />
        </PlaylistGrid>
      </LayoutContainer>
    </TemplateWrapper>
  );
};

export default MainPage;
