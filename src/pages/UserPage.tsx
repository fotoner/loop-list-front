import React from 'react';
import styled from '@emotion/styled';
import { color, fontSize, fontWeight, layoutWidth, lineHeight, spacing } from '@/styles/base';
import AlbumCover from '@/assets/image.png';
import PlaylistCard, { PlaylistGrid } from '@/components/playlist/PlaylistCard';
import Twitter from '@/assets/icons/x.svg';
// import Mixcloud from '@/assets/icons/mixcloud.svg';

const TemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserHeader = styled.div`
  width: 100%;
  background-color: ${color['primary-900']};
  color: ${color['gray-30']};
  padding: ${spacing[6]} 0;
`;

const HeaderContent = styled.div`
  margin: auto;
  max-width: ${layoutWidth};
  padding: 0 ${spacing[4]};
  display: flex;
  align-items: center;
  gap: ${spacing[6]};
`;

const ProfileImage = styled.div`
  width: ${spacing[26]};
  height: ${spacing[26]};
  border-radius: 50%;
  background-color: ${color['gray-700']};
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[2]};

  h1 {
    font-size: ${fontSize['3xl']};
    font-weight: ${fontWeight.semibold};
    line-height: ${lineHeight[1]};
  }

  .stats {
    display: flex;
    gap: ${spacing[4]};
    color: ${color['gray-200']};
    font-size: ${fontSize.sm};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${spacing[3]};

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${spacing[6]};
    height: ${spacing[6]};
    border-radius: 50%;
    background-color: ${color['gray-700']};
    transition: background-color 0.2s;

    &:hover {
      background-color: ${color['gray-600']};
    }

    img {
      width: ${spacing[4]};
      height: ${spacing[4]};
    }
  }
`;

const ContentContainer = styled.div`
  margin: auto;
  max-width: ${layoutWidth};
  width: 100%;
  padding: ${spacing[4]};
`;

const BioSection = styled.div`
  margin-top: ${spacing[4]};
  max-width: ${layoutWidth};
  width: 100%;
  padding: 0 ${spacing[4]};

  .bio {
    font-size: ${fontSize.base};
    color: ${color['gray-700']};
    line-height: 1.6;
    white-space: pre-line;
  }
`;

const UserPage: React.FC = () => {
  const user = {
    name: '포토네',
    playlists: 12,
    followers: 120,
    following: 80,
    social: {
      twitter: 'https://twitter.com/your-profile',
      mixcloud: 'https://www.mixcloud.com/your-profile/',
    },
    bio: `안녕하세요, 포토네입니다!`,
  };

  const playlists = [1, 2, 3, 4, 5, 6].map((val) => ({
    coverImage: AlbumCover,
    id: val,
    title: '다이브 공모 믹스',
    author: '포토네',
    date: '2024.03.15',
    tags: ['애니송', '원곡', '공모'],
  }));

  return (
    <TemplateWrapper>
      <UserHeader>
        <HeaderContent>
          <ProfileImage />
          <UserInfo>
            <h1>{user.name}</h1>
            <div className='stats'>
              <span>플레이리스트 {user.playlists}</span>
            </div>
            <SocialLinks>
              <a href={user.social.twitter} target='_blank' rel='noopener noreferrer'>
                <img src={Twitter} alt='X(Twitter)' />
              </a>
              <a href={user.social.mixcloud} target='_blank' rel='noopener noreferrer'>
                {/* <img src={Mixcloud} alt='Mixcloud' /> */}
              </a>
            </SocialLinks>
          </UserInfo>
        </HeaderContent>
      </UserHeader>

      <BioSection>
        <div className='bio'>
          {user.bio.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      </BioSection>

      <ContentContainer>
        <h1>플레이리스트</h1>
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
        </PlaylistGrid>
      </ContentContainer>
    </TemplateWrapper>
  );
};

export default UserPage;
