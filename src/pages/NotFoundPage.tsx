import React from 'react';
import styled from '@emotion/styled';
import { color, fontSize, fontWeight, spacing, lineHeight } from '@/styles/base';
import { LinkButton } from '@/components/common/Button';

const TemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 72px);
  background-color: ${color['primary-900']};
  color: ${color['gray-30']};
  text-align: center;
  padding: ${spacing[4]};
`;

const ErrorCode = styled.h1`
  font-size: ${fontSize['5xl']};
  margin: 0;
  line-height: ${lineHeight['1.2']};
`;

const ErrorTitle = styled.h2`
  font-size: ${fontSize['2xl']};
  font-weight: ${fontWeight.regular};
  margin: ${spacing[4]} 0;
`;

const ErrorDescription = styled.p`
  color: ${color['gray-300']};
  margin-bottom: ${spacing[6]};
  font-size: ${fontSize.lg};
`;

const NotFoundPage: React.FC = () => {
  return (
    <TemplateWrapper>
      <ErrorCode>404</ErrorCode>
      <ErrorTitle>페이지를 찾을 수 없습니다</ErrorTitle>
      <ErrorDescription>요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.</ErrorDescription>
      <LinkButton to='/'>메인페이지로 돌아가기</LinkButton>
    </TemplateWrapper>
  );
};

export default NotFoundPage;
