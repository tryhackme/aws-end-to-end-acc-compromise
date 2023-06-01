// pages/login.tsx
import { useEffect } from 'react';

const LoginPage = () => {
  useEffect(() => {
    const redirectUrl = `${window.location.origin}/callback`;
    const cognitoLoginUrl = `https://your-cognito-domain.auth.your-region.amazoncognito.com/login?response_type=code&client_id=your-client-id&redirect_uri=${encodeURIComponent(
      redirectUrl
    )}`;

    window.location.href = cognitoLoginUrl;
  }, []);

  return (
    <div>
      <h1>Login</h1>
      <p>Redirecting to AWS Cognito hosted UI...</p>
    </div>
  );
};

export default LoginPage;