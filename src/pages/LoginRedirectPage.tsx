import React, { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { login } from '@/lib/service/auth/auth-service';

const LoginRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const loginAttempted = useRef(false);

  useEffect(() => {
    const handleLogin = async () => {
      if (loginAttempted.current) return;
      if (!searchParams.get('code') || searchParams.get('state') === 'error') {
        return;
      }
      loginAttempted.current = true;
      const response = await login(searchParams.get('code')!);
      console.log(response);
    };
    handleLogin();
  }, [searchParams]);

  return <div>로그인 중. . .</div>;
};

export default LoginRedirectPage;
