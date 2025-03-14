import React, { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { login } from '@/lib/service/auth/auth-service';
import token from '@/lib/service/auth/token';

const LoginRedirectPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const loginAttempted = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogin = async () => {
      if (loginAttempted.current) return;
      if (!searchParams.get('code') || searchParams.get('state') === 'error') {
        navigate('/');
        return;
      }

      loginAttempted.current = true;
      const response = await login(searchParams.get('code')!);
      if (response.data.code === 200) {
        token.accessToken.set(response.data.data.accessToken);
        navigate('/');
      } else {
        navigate('/');
      }
    };
    handleLogin();
  }, [searchParams, navigate]);

  return <div></div>;
};

export default LoginRedirectPage;
