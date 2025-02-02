import React from 'react';
import styled from '@emotion/styled';
import { color, fontSize, fontWeight, layoutWidth, lineHeight, spacing } from '@/styles/base';
import Twitter from '@/assets/icons/x.svg';
import AlbumCover from '@/assets/image.png';
import PlaylistCard, { PlaylistGrid } from '@/components/playlist/PlaylistCard';
import { LinkButton } from '@/components/common/Button';

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
  const playlists = [1, 2, 3, 4, 5, 6, 7].map((val) => ({
    coverImage: AlbumCover,
    id: val,
    title: '다이브 공모 믹스',
    author: '포토네',
    date: '2024.03.15',
    tags: ['애니송', '원곡', '공모'],
  }));

  const handleLogin = () => {
    /* 로그인 처리 로직 */
  };

  return (
    <TemplateWrapper>
      <MainInfo>
        <MainInfoContainer>
          <h1>Event, History, Share</h1>
          <h2>rekordbox 플레이리스트를 손쉽게 기록하고 공유해보세요</h2>
          <div className='gap'></div>
          <LinkButton to='/login' width={spacing[35]} onClick={handleLogin}>
            <img src={Twitter} alt='' />로 로그인하기
          </LinkButton>
        </MainInfoContainer>
      </MainInfo>
      <LayoutContainer>
        <h1>최신 플레이리스트</h1>
        <PlaylistGrid>
          {playlists.map((playlist, index) => (
            <PlaylistCard
              key={index}
              coverImage={playlist.coverImage}
              title={playlist.title}
              author={playlist.author}
              date={playlist.date}
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
