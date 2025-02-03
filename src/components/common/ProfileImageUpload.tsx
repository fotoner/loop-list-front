import React from 'react';
import styled from '@emotion/styled';
import { useDropzone } from 'react-dropzone';
import { color, spacing } from '@/styles/base';

const ProfileImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing[4]};
  margin-bottom: ${spacing[6]};
`;

const ProfileImagePreview = styled.div<{ imageUrl?: string }>`
  width: ${spacing[24]};
  height: ${spacing[24]};
  border-radius: 50%;
  background-color: ${color['gray-300']};
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  border: 2px solid ${color['gray-500']};
`;

const Dropzone = styled.div`
  border: 2px dashed ${color['gray-500']};
  border-radius: ${spacing[2]};
  padding: ${spacing[4]};
  text-align: center;
  cursor: pointer;
  background-color: ${color['gray-30']};
  &:hover {
    border-color: ${color['primary-500']};
  }
`;

interface ProfileImageUploadProps {
  imageUrl?: string;
  onImageUpload: (file: File) => void;
}

const ProfileImageUpload: React.FC<ProfileImageUploadProps> = ({ imageUrl, onImageUpload }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': ['.jpg', '.jpeg', '.png'] },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles[0]) {
        onImageUpload(acceptedFiles[0]);
      }
    },
  });

  return (
    <ProfileImageUploadContainer>
      <ProfileImagePreview imageUrl={imageUrl} />
      <Dropzone {...getRootProps()}>
        <input {...getInputProps()} />
        <p>프로필 사진을 드래그하거나 클릭하여 업로드하세요</p>
        <p>(JPG, PNG 파일만 가능)</p>
      </Dropzone>
    </ProfileImageUploadContainer>
  );
};

export default ProfileImageUpload;
