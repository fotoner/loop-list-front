import React from 'react';
import styled from '@emotion/styled';
import { color, fontSize, fontWeight, layoutWidth, spacing } from '@/styles/base';
import AlbumCover from '@/assets/image.png';
import { Button } from '@/components/common/Button';
import { useParams, Link } from 'react-router-dom';
import { useFetchPlaylist } from '@/lib/service/playlist/use-playlist-service';
import { useUser } from '@/lib/service/user/use-user-service';

const TemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserInfoSection = styled(Link)`
  margin: auto;
  max-width: ${layoutWidth};
  width: 100%;
  padding: ${spacing[4]};
  margin: 0 ${spacing[4]};
  display: flex;
  align-items: center;
  gap: ${spacing[4]};
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  .profile {
    width: ${spacing[12]};
    height: ${spacing[12]};
    border-radius: 50%;
    background-color: ${color['gray-700']};

    & > img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: ${spacing[1]};

    .name {
      font-size: ${fontSize.lg};
      font-weight: ${fontWeight.semibold};
      color: ${color['primary-500']};
    }

    .stats {
      display: flex;
      gap: ${spacing[4]};
      color: ${color['gray-400']};
      font-size: ${fontSize.sm};
    }
  }
`;

const DescriptionSection = styled.div`
  margin: auto;
  max-width: ${layoutWidth};
  width: 100%;
  padding: 0 ${spacing[4]};
  font-size: ${fontSize.base};
  color: ${color['gray-400']};
  line-height: 1.6;
  white-space: pre-line;
`;

const PlaylistHeader = styled.div<{ coverImage: string }>`
  width: 100%;
  background-color: ${color['primary-900']};
  color: ${color['gray-30']};
  padding: ${spacing[6]} 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${({ coverImage }) => coverImage});
    background-size: cover;
    background-position: center;
    filter: blur(20px) brightness(0.3);
    z-index: 0;
  }
`;

const HeaderContent = styled.div`
  margin: auto;
  max-width: ${layoutWidth};
  padding: 0 ${spacing[4]};
  display: flex;
  align-items: center;
  gap: ${spacing[6]};
  position: relative;
  z-index: 1;
`;

const CoverImage = styled.div`
  width: ${spacing[44]};
  height: ${spacing[44]};
  background-color: ${color['gray-700']};

  & > img {
    width: 100%;
    height: 100%;
  }
`;

const PlaylistInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[2]};

  h1 {
    font-size: ${fontSize['3xl']};
    font-weight: ${fontWeight.semibold};
  }

  .metadata {
    color: ${color['gray-200']};
    font-size: ${fontSize.sm};
  }

  .mixcloud-link {
    color: ${color['primary-500']};
    text-decoration: none;
    font-size: ${fontSize.sm};
    &:hover {
      text-decoration: underline;
    }
  }

  .tags {
    display: flex;
    gap: ${spacing[2]};
    margin-top: ${spacing[2]};
  }

  .tag {
    padding: ${spacing[1]} ${spacing[2]};
    background-color: ${color['primary-700']};
    border-radius: ${spacing[1]};
    font-size: ${fontSize.sm};
    color: ${color['gray-30']};
  }
`;

const TrackListContainer = styled.div`
  margin: auto;
  max-width: ${layoutWidth};
  width: 100%;
  padding: ${spacing[4]};
`;

const TrackTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    text-align: left;
    padding: ${spacing[2]};
    border-bottom: 1px solid ${color['gray-700']};
    color: ${color['gray-500']};
    font-size: ${fontSize.sm};

    &:nth-of-type(1) {
      width: 5%;
    }
    &:nth-of-type(2) {
      width: 40%;
    }
    &:nth-of-type(3) {
      width: 10%;
    }
    &:nth-of-type(4) {
      width: 45%;
    }
  }

  td {
    padding: ${spacing[2]};
    border-bottom: 1px solid ${color['gray-700']};
    color: ${color['gray-500']};

    &:nth-of-type(1) {
      width: 5%;
    }
    &:nth-of-type(2) {
      width: 40%;
    }
    &:nth-of-type(3) {
      width: 10%;
    }
    &:nth-of-type(4) {
      width: 45%;
    }

    &.track {
      .title {
        font-size: ${fontSize.lg};
      }
      .artist {
        font-size: ${fontSize.sm};
      }
    }
  }

  tbody tr:hover {
    td {
      color: ${color['primary-500']};
    }
  }
`;

const PlaylistDetailPage: React.FC = () => {
  const { id } = useParams();
  const { data: playlist } = useFetchPlaylist(id);
  const { data: user } = useUser(playlist?.userId ?? '');

  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('링크가 복사되었습니다!');
  };

  if (!playlist) return null;

  const playlistData = {
    title: playlist.title,
    username: user?.data.data.name,
    userId: user?.data.data.userId,
    date: new Date(playlist.createdAt).toLocaleDateString(),
    trackCount: playlist.songs?.length || 0,
    tags: playlist.tags,
    description: playlist.description || '',
    cover: playlist.cover || AlbumCover,
  };

  return (
    <TemplateWrapper>
      <PlaylistHeader coverImage={`${import.meta.env.VITE_API_URL}/upload/${playlistData.cover}`}>
        <HeaderContent>
          <CoverImage>
            <img
              src={`${import.meta.env.VITE_API_URL}/upload/${playlistData.cover}`}
              alt={playlistData.title}
            />
          </CoverImage>
          <PlaylistInfo>
            <h1>{playlistData.title}</h1>
            <div className='metadata'>
              <p>작성일: {playlistData.date}</p>
              <p>트랙 수: {playlistData.trackCount}곡</p>
            </div>
            <div className='tags'>
              {playlistData.tags.map((tag, index) => (
                <span key={index} className='tag'>
                  {tag}
                </span>
              ))}
            </div>
          </PlaylistInfo>
          <Button
            onClick={handleShareClick}
            backgroundColor={color['primary-500']}
            textColor={color['gray-30']}
            hoverBackgroundColor={color['primary-600']}
            style={{
              position: 'absolute',
              top: spacing[4],
              right: spacing[4],
            }}
          >
            공유하기
          </Button>
        </HeaderContent>
      </PlaylistHeader>

      <UserInfoSection to={`/user/${playlistData.userId}`}>
        <div className='profile'>
          <img src={user?.data.data.picture} alt={user?.data.data.username} />
        </div>
        <div className='info'>
          <div className='name'>{playlistData.username}</div>
        </div>
      </UserInfoSection>

      <DescriptionSection>
        <div className='content'>
          {playlistData.description.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      </DescriptionSection>

      <TrackListContainer>
        <h1>트랙 목록</h1>
        <TrackTable>
          <thead>
            <tr>
              <th>#</th>
              <th>트랙 제목</th>
              <th>BPM</th>
              <th>장르</th>
            </tr>
          </thead>
          <tbody>
            {playlist.songs?.map((track, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className='track'>
                  <div className='title'>{track.title}</div>
                  <div className='artist'>{track.artist}</div>
                </td>
                <td>{track.bpm}</td>
                <td>{track.genre}</td>
              </tr>
            ))}
          </tbody>
        </TrackTable>
      </TrackListContainer>
    </TemplateWrapper>
  );
};

export default PlaylistDetailPage;
