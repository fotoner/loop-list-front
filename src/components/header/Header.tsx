import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { color, fontSize, fontWeight, layoutWidth, spacing } from '@/styles/base';
import { LinkButton } from '../common/Button';

const TemplateWrapper = styled.header`
  position: fixed;
  width: 100%;
  height: ${fontSize['5xl']};
  border-bottom: 1px solid ${color['gray-100']};
  top: 0;
  left: 0;
  user-select: none;
  z-index: 10000;
  word-break: keep-all;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: ${color.white};
`;

const TemplateInner = styled.div`
  margin: 0 auto;
  padding: 0 ${fontSize.base};
  display: flex;
  flex-direction: row;
  height: ${fontSize['5xl']};
  align-items: center;
  width: 100%;
  max-width: ${layoutWidth};
`;

const MainLogo = styled.span`
  font-size: ${fontSize['2xl']};
  color: ${color['primary-500']};
  font-weight: ${fontWeight.semibold};
  display: flex;
  align-items: center;
  a {
    color: ${color['primary-500']};
  }
`;

const Links = styled.div`
  margin-left: ${spacing[4]};
  display: flex;
  gap: ${spacing[2]};
`;

const StyledLink = styled(Link)`
  color: ${color['gray-600']};
  font-size: ${fontSize.base};
  font-weight: ${fontWeight.semibold};
  text-decoration: none;
  padding: ${spacing[2]} ${spacing[3]};
  border-radius: ${spacing[1]};
  transition: all 0.2s ease-in-out;
  position: relative;

  &:hover {
    color: ${color['primary-500']};
    background-color: ${color['gray-50']};
  }

  &.active {
    color: ${color['primary-500']};
    font-weight: ${fontWeight.semibold};

    &:after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${color['primary-500']};
    }
  }
`;

const Padding = styled.div`
  flex: 1 0 0;
`;

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <TemplateWrapper>
      <TemplateInner>
        <MainLogo>
          <Link to='/'>Event-Loop</Link>
        </MainLogo>
        <Links>
          <StyledLink to='/' className={location.pathname === '/' ? 'active' : ''}>
            홈
          </StyledLink>
          <StyledLink
            to='/playlists'
            className={location.pathname === '/playlists' ? 'active' : ''}
          >
            플레이리스트
          </StyledLink>
        </Links>
        <Padding />
        <LinkButton backgroundColor={color['gray-30']} to='/login'>
          로그인
        </LinkButton>
      </TemplateInner>
    </TemplateWrapper>
  );
};

export default Header;
