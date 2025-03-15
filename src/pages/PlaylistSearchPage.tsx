import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { color, fontSize, layoutWidth, spacing } from '@/styles/base';
import PlaylistCard, { PlaylistGrid } from '@/components/playlist/PlaylistCard';
import { useFetchPlaylistPage } from '@/lib/service/playlist/use-playlist-service';
import { PlaylistData } from '@/types/playlist-types';

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

// const SearchContainer = styled.div`
//   display: flex;
//   gap: ${spacing[4]};
//   margin: ${spacing[3]} 0;
// `;

// const SearchInput = styled.input`
//   padding: ${spacing[2]} ${spacing[3]};
//   border: 1px solid ${color['gray-200']};
//   border-radius: ${spacing[1]};
//   font-size: ${fontSize.base};
//   flex: 1;

//   &:focus {
//     outline: none;
//     border-color: ${color['primary-500']};
//   }
// `;

// const SearchButton = styled.button`
//   padding: ${spacing[2]} ${spacing[4]};
//   background-color: ${color['primary-500']};
//   color: ${color.white};
//   border: none;
//   border-radius: ${spacing[1]};
//   font-size: ${fontSize.base};
//   font-weight: ${fontWeight.semibold};
//   cursor: pointer;

//   &:hover {
//     background-color: ${color['primary-600']};
//   }
// `;

const LoadingWrapper = styled.div`
  width: 100%;
  padding: ${spacing[4]};
  text-align: center;
  color: ${color['gray-500']};
`;

const PlaylistSearchPage: React.FC = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  // const [searchType] = useState<'title' | 'tag'>('title');
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useFetchPlaylistPage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 },
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  // const handleSearch = () => {
  //   // 검색 로직 구현
  //   console.log(`Searching ${searchType} for:`, searchTerm);
  // };

  return (
    <TemplateWrapper>
      <LayoutContainer>
        <h1>전체 플레이리스트</h1>
        {/* <SearchContainer>
          <SearchInput
            type='text'
            placeholder={`${searchType === 'title' ? '제목' : '태그'}으로 검색`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchButton onClick={handleSearch}>검색</SearchButton>
        </SearchContainer> */}

        {isLoading ? (
          <LoadingWrapper>로딩 중...</LoadingWrapper>
        ) : (
          <PlaylistGrid>
            {data?.pages.flatMap((page) =>
              page.content.map((playlist: PlaylistData) => (
                <PlaylistCard
                  key={playlist.id}
                  coverImage={`${playlist.cover || ''}`}
                  title={playlist.title}
                  author={playlist.username}
                  date={new Date(playlist.createdAt).toLocaleDateString()}
                  tags={playlist.tags}
                  id={playlist.id}
                />
              )),
            )}
          </PlaylistGrid>
        )}

        {isFetchingNextPage ? (
          <LoadingWrapper>더 불러오는 중...</LoadingWrapper>
        ) : hasNextPage ? (
          <LoadingWrapper ref={loadMoreRef}>더 보기</LoadingWrapper>
        ) : null}
      </LayoutContainer>
    </TemplateWrapper>
  );
};

export default PlaylistSearchPage;
