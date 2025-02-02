import React, { useState } from 'react';
import styled from '@emotion/styled';
import { color, fontSize, fontWeight, layoutWidth, spacing } from '@/styles/base';
import PlaylistCard, { PlaylistGrid } from '@/components/playlist/PlaylistCard';
import AlbumCover from '@/assets/image.png';

const TemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LayoutContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  max-width: ${layoutWidth};
  padding: ${fontSize.base};
  width: 100%;
`;

const SearchContainer = styled.div`
  display: flex;
  gap: ${spacing[4]};
  margin: ${spacing[3]} 0;
`;

const SearchInput = styled.input`
  padding: ${spacing[2]} ${spacing[3]};
  border: 1px solid ${color['gray-200']};
  border-radius: ${spacing[1]};
  font-size: ${fontSize.base};
  flex: 1;

  &:focus {
    outline: none;
    border-color: ${color['primary-500']};
  }
`;

const SearchButton = styled.button`
  padding: ${spacing[2]} ${spacing[4]};
  background-color: ${color['primary-500']};
  color: ${color.white};
  border: none;
  border-radius: ${spacing[1]};
  font-size: ${fontSize.base};
  font-weight: ${fontWeight.semibold};
  cursor: pointer;

  &:hover {
    background-color: ${color['primary-600']};
  }
`;

const PlaylistSearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType] = useState<'title' | 'tag'>('title');

  // 임시 데이터 (실제로는 API에서 가져옴)
  const playlists = [1, 2, 3, 4, 5, 6, 7].map((val) => ({
    coverImage: AlbumCover,
    id: val,
    title: '다이브 공모 믹스',
    author: '포토네',
    date: '2024.03.15',
    tags: ['애니송', '원곡', '공모'],
  }));

  const handleSearch = () => {
    // 검색 로직 구현
    console.log(`Searching ${searchType} for:`, searchTerm);
  };

  return (
    <TemplateWrapper>
      <LayoutContainer>
        <h1>플레이리스트 검색</h1>
        <SearchContainer>
          <SearchInput
            type='text'
            placeholder={`${searchType === 'title' ? '제목' : '태그'}으로 검색`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchButton onClick={handleSearch}>검색</SearchButton>
        </SearchContainer>

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
      </LayoutContainer>
    </TemplateWrapper>
  );
};

export default PlaylistSearchPage;
