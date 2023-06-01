// pages/callback.tsx
import { useEffect } from 'react';

const CallbackPage = () => {
  useEffect(() => {
    const handleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.hash.substr(1));
      const accessToken = urlParams.get('access_token');
      const idToken = urlParams.get('id_token');

      if (accessToken && idToken) {
        // TODO: Handle the authenticated user session (e.g., store tokens, redirect to authenticated page)
      } else {
        console.error('Error receiving tokens from AWS Cognito hosted UI');
      }
    };

    handleCallback();
  }, []);

  return (
    <div>
      <h1>Callback</h1>
      <p>Processing the authentication callback...</p>
    </div>
  );
};

export default CallbackPage;