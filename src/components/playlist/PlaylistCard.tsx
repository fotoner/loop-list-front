import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { borderRadius, color, fontSize, fontWeight, spacing } from '@/styles/base';

const Card = styled(Link)<{ variant?: 'default' | 'more' }>`
  background: ${color.white};
  border-radius: ${borderRadius['1.5']};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;
  user-select: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }

  ${({ variant }) =>
    variant === 'more' &&
    css`
      border: 2px dashed ${color['gray-200']};
      border-radius: ${spacing[2]};
      height: 100%;
      min-height: ${spacing[64]};
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: ${color['gray-50']};
      }

      h3 {
        color: ${color['gray-500']};
        font-size: ${fontSize.xl};
      }
    `}
`;

const PlaylistImage = styled.div`
  width: 100%;
  padding-top: 100%;
  background-color: ${color['gray-100']};
  position: relative;

  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PlaylistInfo = styled.div`
  padding: ${spacing[3]};

  h3 {
    font-size: ${fontSize.lg};
    font-weight: ${fontWeight.semibold};
    margin-bottom: ${spacing[1]};
    color: ${color['primary-500']};
  }

  p {
    color: ${color['gray-600']};
    font-size: ${fontSize.sm};
  }
`;

const TagList = styled.div`
  display: flex;
  gap: ${spacing[1]};
  flex-wrap: wrap;
  margin-top: ${spacing[2]};
`;

const Tag = styled.span`
  background-color: ${color['gray-100']};
  color: ${color['gray-700']};
  padding: ${spacing[1]} ${spacing[2]};
  border-radius: ${borderRadius[10]};
  font-size: ${fontSize.xs};
  font-weight: ${fontWeight.regular};
`;

const PlaylistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${spacing[4]};
  margin: ${spacing[4]} 0;
`;

interface PlaylistCardProps {
  id?: number;
  variant?: 'default' | 'more';
  coverImage?: string;
  title: string;
  author?: string;
  date?: string;
  tags?: string[];
  onClick?: () => void;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({
  id,
  variant = 'default',
  coverImage,
  title,
  author,
  date,
  tags,
  onClick,
}) => {
  if (variant === 'more') {
    return (
      <Card to='/playlists' variant='more' onClick={onClick}>
        <h3>{title}</h3>
      </Card>
    );
  }

  return (
    <Card to={`/playlists/${id}`}>
      <PlaylistImage>
        <img src={`${import.meta.env.VITE_API_URL}/upload/${coverImage}`} alt='플레이리스트 커버' />
      </PlaylistImage>
      <PlaylistInfo>
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{date}</p>
        <TagList>{tags?.map((tag, index) => <Tag key={index}>{tag}</Tag>)}</TagList>
      </PlaylistInfo>
    </Card>
  );
};

export { PlaylistGrid };
export default PlaylistCard;
