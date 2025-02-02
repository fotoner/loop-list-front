import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { fontSize } from '@/styles/base';

interface ArticleProps {
  children: ReactNode;
}

const TemplateWrapper = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  margin-top: ${fontSize['5xl']};
`;

const Article: React.FC<ArticleProps> = ({ children }) => {
  return <TemplateWrapper>{children}</TemplateWrapper>;
};

export default Article;
