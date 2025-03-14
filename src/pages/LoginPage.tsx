import React from 'react';

const LoginPage: React.FC = () => {
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: 'UTFPVGg2TnVJZ1NlS1pjYmhTMV86MTpjaQ',
    redirect_uri: 'http://localhost:5173/login-redirect',
    scope: 'tweet.read users.read',
    state: 'state',
    code_challenge: 'challenge',
    code_challenge_method: 'plain',
    code_verifier: 'challenge',
  });
  window.location.href = `https://twitter.com/i/oauth2/authorize?${params.toString()}`;

  return <div></div>;
};

export default LoginPage;
