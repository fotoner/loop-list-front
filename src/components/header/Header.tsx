import React from 'react';
import styled from '@emotion/styled';
import { color, fontSize, fontWeight, layoutWidth } from '@/styles/base';

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
  font-size: ${fontSize.xl};
  color: ${color['primary-500']};
  font-weight: ${fontWeight.semibold};
`;

const Header: React.FC = () => {
  return (
    <TemplateWrapper>
      <TemplateInner>
        <MainLogo>Loop-List</MainLogo>
      </TemplateInner>
    </TemplateWrapper>
  );
};

export default Header;
