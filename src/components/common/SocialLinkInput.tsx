import React from 'react';
import styled from '@emotion/styled';
import { spacing } from '@/styles/base';
import Input from '@/components/common/Input';

const SocialLinkInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[2]};
  width: 100%;
`;

const Icon = styled.img`
  width: ${spacing[6]};
  height: ${spacing[6]};
  flex-shrink: 0;
`;

interface SocialLinkInputProps {
  iconSrc?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const SocialLinkInput: React.FC<SocialLinkInputProps> = ({
  iconSrc,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <SocialLinkInputContainer>
      {iconSrc && <Icon src={iconSrc} alt='Social Icon' />}
      <Input
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </SocialLinkInputContainer>
  );
};

export default SocialLinkInput;
