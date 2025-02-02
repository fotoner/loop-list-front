import React from 'react';
import styled from '@emotion/styled';
import { color, fontSize, fontWeight, layoutWidth, spacing } from '@/styles/base';
import AlbumCover from '@/assets/image.png';
import { Button } from '@/components/common/Button';

const TemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserInfoSection = styled.div`
  margin: auto;
  max-width: ${layoutWidth};
  width: 100%;
  padding: ${spacing[4]};
  margin: 0 ${spacing[4]};
  display: flex;
  align-items: center;
  gap: ${spacing[4]};

  .profile {
    width: ${spacing[12]};
    height: ${spacing[12]};
    border-radius: 50%;
    background-color: ${color['gray-700']};
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

const PlaylistHeader = styled.div`
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
    background-image: url(${AlbumCover});
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

    &:nth-child(1) {
      // # 열
      width: 5%;
    }
    &:nth-child(2) {
      // 트랙 제목
      width: 40%;
    }
    &:nth-child(3) {
      // BPM
      width: 10%;
    }
    &:nth-child(4) {
      // 장르
      width: 45%;
    }
  }

  td {
    padding: ${spacing[2]};
    border-bottom: 1px solid ${color['gray-700']};
    color: ${color['gray-500']};

    &:nth-child(1) {
      // # 열
      width: 5%;
    }
    &:nth-child(2) {
      // 트랙 제목
      width: 40%;
    }
    &:nth-child(3) {
      // BPM
      width: 10%;
    }
    &:nth-child(4) {
      // 장르
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

interface Track {
  number: number;
  title: string;
  artist: string;
  bpm: number;
  genre: string;
}

const sampleTracks: Track[] = [
  {
    number: 1,
    title: 'ダイスキ。',
    artist: '大橋彩香',
    bpm: 138.0,
    genre: 'TVA 귀여우면 변태라도 좋아해 주실 수 있나요? OP',
  },
  {
    number: 3,
    title: 'SELF PRODUCER',
    artist: '茅原実里',
    bpm: 138.0,
    genre: 'TVA 오빠지만 사랑만 있으면 상관없잖아 OP',
  },
  {
    number: 4,
    title: 'adrenaline!!! (TV Size.)',
    artist: 'TrySail',
    bpm: 134.0,
    genre: 'TVA 에로망가 선생 ED TVSIZE',
  },
  {
    number: 5,
    title: 'Perfect-area complete!',
    artist: '麻生夏子',
    bpm: 183.0,
    genre: 'TVA 바보와 시험과 소환수 OP',
  },
  {
    number: 6,
    title: '侵略ノススメ☆',
    artist: 'ULTRA PRISM',
    bpm: 185.0,
    genre: 'TVA 침략 오징어 소녀 OP',
  },
  {
    number: 7,
    title: 'ヒャダインのカカカタ☆カタオモイ-C EDIT',
    artist: 'ヒャダイン',
    bpm: 180.0,
    genre: 'TVA 일상 OP 1',
  },
  {
    number: 8,
    title: '正解はひとつ!じゃない!!',
    artist: 'ミルキィホームズ',
    bpm: 170.0,
    genre: 'TVA 탐정 오페라 밀키홈즈 1기 OP',
  },
  {
    number: 9,
    title: 'Prism Sympathy',
    artist: 'StylipS',
    bpm: 170.0,
    genre: 'TVA 프리즈마 이리야 OP',
  },
  {
    number: 10,
    title: '魔法少女チノ',
    artist: 'チノ(水瀬いのり)',
    bpm: 170.0,
    genre: 'TVA 주문은 토끼입니까 CS',
  },
  {
    number: 11,
    title: 'Fantastic future EDIT',
    artist: '田村ゆかり',
    bpm: 172.0,
    genre: 'TVA 변태왕자와 웃지 않는 고양이 OP',
  },
  {
    number: 12,
    title: 'SUPER∞STREAM',
    artist: '篠ノ之 箒(CV.日笠陽子) 외',
    bpm: 180.0,
    genre: 'TVA 인피니티 스트라토스 ED',
  },
  {
    number: 13,
    title: '一歩前ノセカイ',
    artist: 'TINGS',
    bpm: 168.0,
    genre: 'TVA 샤인포스트 ED 4화',
  },
  {
    number: 14,
    title: '純情メイドぶっころ主KISS',
    artist: '柊結夢 (CV. 田中美海)',
    bpm: 174.0,
    genre: 'TVA 아키바 메이드 전쟁 IN',
  },
  {
    number: 15,
    title: 'POP IN 2',
    artist: 'B小町',
    bpm: 176.0,
    genre: 'TVA 최애의아이 2기 IN',
  },
  {
    number: 16,
    title: 'シカ色デイズ',
    artist: '鹿乃子のこ (CV.潘めぐみ) 외',
    bpm: 183.02,
    genre: 'TVA 사슴 아이 어슬렁어슬렁 호시탐탐 OP',
  },
  {
    number: 17,
    title: 'ハッピーエンドプリンセス',
    artist: '上坂すみれ',
    bpm: 174.0,
    genre: 'TVA 티어문 제국 이야기 OP',
  },
  {
    number: 18,
    title: 'ワールドイズマイン',
    artist: 'アーリャ(CV:上坂すみれ)',
    bpm: 165.0,
    genre: 'TVA 가끔씩 툭하고 러시아어로 부끄러워하는 옆자리의 아랴 양 ED',
  },
  {
    number: 19,
    title: 'KING',
    artist: 'Kanaria feat. V3 GUMI (English)',
    bpm: 166.0,
    genre: 'VD 보카로',
  },
  {
    number: 20,
    title: 'メグメグ☆フャイヤーエンドレスナイト',
    artist: 'samfree',
    bpm: 162.0,
    genre: 'VD 보카로',
  },
  {
    number: 21,
    title: '気まぐれメルシィ (feat. 初音ミク)',
    artist: '八王子P',
    bpm: 160.0,
    genre: 'VD 보카로',
  },
  {
    number: 22,
    title: 'PANIGHT',
    artist: 'NEGI☆U',
    bpm: 175.0,
    genre: 'VT 홀로라이브',
  },
  {
    number: 23,
    title: 'うい麦畑でつかまえて',
    artist: 'しぐれうい',
    bpm: 168.0,
    genre: 'VT 시구레우이',
  },
  {
    number: 24,
    title: 'バーチャル・ショータ이ム!',
    artist: '心音淡雪(CV:佐倉綾音)&シュワちゃん(CV:佐倉綾音)',
    bpm: 168.0,
    genre: 'TVA VTuber인데 방송 끄는 걸 깜빡했더니 전설이 되어있었다 OP',
  },
  {
    number: 25,
    title: 'ドレミファクトリー！',
    artist: 'U149',
    bpm: 167.0,
    genre: 'TVA 아이돌마스터 신데렐라걸즈 U149 IN10',
  },
  {
    number: 26,
    title: 'Orange Sapphire',
    artist: '城ヶ崎莉嘉 외',
    bpm: 162.0,
    genre: 'TVA 아이돌마스터 신데렐라 걸즈 IN 10',
  },
  {
    number: 27,
    title: '自分REST@RT (M@STER VERSION)',
    artist: '中村繪里子 외',
    bpm: 171.0,
    genre: 'GM 아이마스',
  },
];

interface PlaylistData {
  title: string;
  author: string;
  date: string;
  trackCount: number;
  tags: string[];
}

const playlistData: PlaylistData = {
  title: '운지! 공모 믹스',
  author: 'DJ 포토네',
  date: '2024.03.15',
  trackCount: 27,
  tags: ['애니송', '원곡', '공모'],
};

const PlaylistDetailPage: React.FC = () => {
  const handleShareClick = () => {
    // 공유 기능 구현
    navigator.clipboard.writeText(window.location.href);
    alert('링크가 복사되었습니다!');
  };

  return (
    <TemplateWrapper>
      <PlaylistHeader>
        <HeaderContent>
          <CoverImage>
            <img src={AlbumCover} alt='' />
          </CoverImage>
          <PlaylistInfo>
            <h1>{playlistData.title}</h1>
            <div className='metadata'>
              <p>작성일: {playlistData.date}</p>
              <p>트랙 수: {playlistData.trackCount}곡</p>
              <a
                href='https://www.mixcloud.com/your-profile/your-mix/'
                target='_blank'
                rel='noopener noreferrer'
                className='mixcloud-link'
              >
                Mixcloud에서 듣기
              </a>
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

      <UserInfoSection>
        <div className='profile' />
        <div className='info'>
          <div className='name'>포토네</div>
          <div className='stats'>
            <span>플레이리스트 12</span>
          </div>
        </div>
      </UserInfoSection>

      <TrackListContainer>
        <h1>플레이리스트</h1>
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
            {sampleTracks.map((track) => (
              <tr key={track.number}>
                <td>{track.number}</td>
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
