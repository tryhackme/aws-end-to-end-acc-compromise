// pages/signup.tsx
import { useEffect } from 'react';

const SignupPage = () => {
  useEffect(() => {
    const redirectUrl = `${window.location.origin}/callback`;
    const cognitoSignupUrl = `https://your-cognito-domain.auth.your-region.amazoncognito.com/signup?response_type=code&client_id=your-client-id&redirect_uri=${encodeURIComponent(
      redirectUrl
    )}`;

    window.location.href = cognitoSignupUrl;
  }, []);

  return (
    <div>
      <h1>Signup</h1>
      <p>Redirecting to AWS Cognito hosted UI signup...</p>
    </div>
  );
};

export default SignupPage;
