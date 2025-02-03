import React, { useState } from 'react';
import styled from '@emotion/styled';
import { color, layoutWidth, spacing } from '@/styles/base';
import { Button } from '@/components/common/Button';
import Input from '@/components/common/Input';
import FormGroup from '@/components/common/FormGroup';
import ProfileImageUpload from '@/components/common/ProfileImageUpload';
import SocialLinkInput from '@/components/common/SocialLinkInput';

const TemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 72px);
  background-color: ${color['gray-30']};
  padding-top: ${spacing[8]};
`;

const EditForm = styled.form`
  max-width: ${layoutWidth};
  width: 100%;
  padding: ${spacing[6]};
  background-color: ${color.white};
  border-radius: ${spacing[2]};
  box-shadow: 0 ${spacing[1]} ${spacing[2]} rgba(0, 0, 0, 0.1);
  margin-top: ${spacing[6]};
  h1 {
    color: ${color['primary-500']};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[3]};
`;

const UserEditPage: React.FC = () => {
  const [name, setName] = useState('포토네');
  const [bio, setBio] = useState('안녕하세요, 포토네입니다!');
  const [twitterUrl, setTwitterUrl] = useState('https://twitter.com/your-profile');
  const [mixcloudUrl, setMixcloudUrl] = useState('https://www.mixcloud.com/your-profile/');
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setProfileImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 프로필 업데이트 로직 구현
    console.log('프로필 업데이트:', { name, bio, twitterUrl, mixcloudUrl, profileImage });
  };

  return (
    <TemplateWrapper>
      <EditForm onSubmit={handleSubmit}>
        <h1>프로필 수정</h1>

        <ProfileImageUpload
          imageUrl={profileImage || undefined}
          onImageUpload={handleImageUpload}
        />

        <FormGroup label='이름'>
          <Input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='이름을 입력하세요'
          />
        </FormGroup>

        <FormGroup label='자기소개'>
          <Input
            type='textarea'
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder='자기소개를 입력하세요'
            rows={5}
          />
        </FormGroup>

        <FormGroup label='소셜 링크'>
          <SocialLinks>
            <SocialLinkInput
              iconSrc={''}
              value={twitterUrl}
              onChange={setTwitterUrl}
              placeholder='X(Twitter) 프로필 URL'
            />
            <SocialLinkInput
              iconSrc={''}
              value={mixcloudUrl}
              onChange={setMixcloudUrl}
              placeholder='Mixcloud 프로필 URL'
            />
          </SocialLinks>
        </FormGroup>

        <Button
          type='submit'
          backgroundColor={color['primary-500']}
          textColor={color['gray-30']}
          style={{ width: '100%' }}
        >
          프로필 저장
        </Button>
      </EditForm>
    </TemplateWrapper>
  );
};

export default UserEditPage;
