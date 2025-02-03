import React from 'react';
import styled from '@emotion/styled';
import { color, fontSize, fontWeight, spacing } from '@/styles/base';

const FormGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[2]};
  margin-bottom: ${spacing[4]};
`;

const Label = styled.label`
  font-size: ${fontSize.xl};
  color: ${color['primary-500']};
  font-weight: ${fontWeight.semibold};
`;

interface FormGroupProps {
  label: string;
  children: React.ReactNode;
}

const FormGroup: React.FC<FormGroupProps> = ({ label, children }) => {
  return (
    <FormGroupContainer>
      <Label>{label}</Label>
      {children}
    </FormGroupContainer>
  );
};

export default FormGroup;
