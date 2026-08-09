import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export const AuthCallback: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get('code');

    console.log('GitHub OAuth callback reached.');
    console.log('Authorization code:', code);

    if (!code) {
      console.error('No GitHub authorization code was returned.');
      navigate('/');
      return;
    }

    // OAuth code will be sent to our backend here later.
  }, [searchParams, navigate]);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        color: '#fff',
        background: '#040001',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1>GITHUB UPLINK ESTABLISHED</h1>
        <p>Processing authentication...</p>
      </div>
    </div>
  );
};