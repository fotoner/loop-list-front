import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { fontSize, layoutWidth } from '@/styles/base';

interface ArticleProps {
  children: ReactNode;
}

const TemplateWrapper = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: ${layoutWidth};
  width: 100%;
  margin: 0 auto;
  margin-top: ${fontSize['5xl']};
  padding: 0 ${fontSize.base};
`;

const Article: React.FC<ArticleProps> = ({ children }) => {
  return <TemplateWrapper>{children}</TemplateWrapper>;
};

export default Article;
