import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { color, fontSize, fontWeight, spacing, lineHeight } from '@/styles/base';

interface ButtonProps {
  width?: string;
  backgroundColor?: string;
  textColor?: string;
  hoverBackgroundColor?: string;
}

const buttonStyles = `
  display: flex;
  align-items: center;
  padding: ${spacing[2]} ${spacing[4]};
  background-color: ${color.white};
  color: ${color['primary-900']};
  border-radius: ${spacing[2]};
  font-size: ${fontSize.base};
  font-weight: ${fontWeight.semibold};
  transition: background-color 0.2s;
  justify-content: center;
  border: none;
  cursor: pointer;
  line-height: ${lineHeight[1]};

  &:hover {
    background-color: ${color['gray-50']};
  }
`;

export const Button = styled.button<ButtonProps>`
  ${buttonStyles}
  ${({ width }) => width && `width: ${width};`}
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`}
  ${({ textColor }) => textColor && `color: ${textColor};`}
  ${({ hoverBackgroundColor }) =>
    hoverBackgroundColor &&
    `
    &:hover {
      background-color: ${hoverBackgroundColor};
    }
  `}
`;

export const LinkButton = styled(Link)<ButtonProps>`
  ${buttonStyles}
  text-decoration: none;
  ${({ width }) => width && `width: ${width};`}
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`}
  ${({ textColor }) => textColor && `color: ${textColor};`}
  ${({ hoverBackgroundColor }) =>
    hoverBackgroundColor &&
    `
    &:hover {
      background-color: ${hoverBackgroundColor};
    }
  `}
`;
