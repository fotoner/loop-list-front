import React from 'react';
import styled from '@emotion/styled';
import { color, fontSize, spacing } from '@/styles/base';

interface InputProps {
  type?: 'text' | 'password' | 'email' | 'number' | 'textarea';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  id?: string;
  rows?: number;
  className?: string;
}

const StyledInput = styled.input`
  padding: ${spacing[2]};
  border: 1px solid ${color['gray-300']};
  border-radius: ${spacing[1]};
  font-size: ${fontSize.base};
  color: ${color['gray-700']};
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${color['primary-500']};
  }
`;

const StyledTextArea = styled.textarea`
  padding: ${spacing[2]};
  border: 1px solid ${color['gray-300']};
  border-radius: ${spacing[1]};
  font-size: ${fontSize.base};
  color: ${color['gray-700']};
  width: 100%;
  resize: vertical;
  min-height: ${spacing[20]};

  &:focus {
    outline: none;
    border-color: ${color['primary-500']};
  }
`;

const Input: React.FC<InputProps> = ({
  type = 'text',
  value,
  onChange,
  onKeyPress,
  placeholder,
  id,
  rows,
  className,
}) => {
  if (type === 'textarea') {
    return (
      <StyledTextArea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={className}
      />
    );
  }

  return (
    <StyledInput
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Input;
