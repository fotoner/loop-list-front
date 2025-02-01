import React from 'react';
import styled from '@emotion/styled';
import { color, fontSize, fontWeight, layoutWidth, lineHeight, spacing } from '@/styles/base';

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
  h1 {
    margin-top: ${fontSize['3xl']};
    line-height: ${lineHeight['1.4']};
    font-size: ${fontSize['2xl']};
  }
  h2 {
    font-size: ${fontSize['xl']};
    font-weight: ${fontWeight.regular};
  }
`;

const LayoutContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  max-width: ${layoutWidth};
  padding: 0 ${fontSize.base};
  width: 100%;
`;

const LoginButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${spacing['1']};
  margin-top: ${spacing['3']};
  width: ${spacing[35]};
  padding: ${spacing['2']} ${spacing['3']};
  background-color: ${color.white};
  border-radius: ${spacing['2']};
  border: none;
  font-size: ${fontSize.base};
  font-weight: ${fontWeight.semibold};
  cursor: pointer;
  justify-content: center;
  transition: background-color 0.2s;
  line-height: ${lineHeight[1]};
  &:hover {
    background-color: ${color['gray-50']};
  }
`;

const MainPage: React.FC = () => {
  return (
    <TemplateWrapper>
      <MainInfo>
        <LayoutContainer>
          <h1>Play, History, Share</h1>
          <h2>rekordbox 플레이리스트를 손쉽게 기록하고 관리해보세요</h2>
          <LoginButton>
            <svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor'>
              <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
            </svg>
            로그인하기
          </LoginButton>
        </LayoutContainer>
      </MainInfo>
    </TemplateWrapper>
  );
};

export default MainPage;
