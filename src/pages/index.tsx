import { NextPage } from 'next'

interface HomePageProps {
  userPoolId: string;
  userPoolClientId: string;
}

const HomePage: NextPage<HomePageProps> = ({ userPoolId, userPoolClientId }) => {
  // Access the userPoolId and userPoolClientId in your component

  return (
    <div className="container">
      <h1 className="title">Welcome to Best Cloud Company Dev Portal!</h1>
      <p className="description">This is the developer portal for our customer development teams, providing detailed documentation, examples, API reference, and more.</p>
    </div>
  );
}

HomePage.getInitialProps = async () => {
  const userPoolId = process.env.COGNITO_USER_POOL_ID;
  const userPoolClientId = process.env.COGNITO_USER_POOL_CLIENT_ID;

  return {
    userPoolId: userPoolId || '',
    userPoolClientId: userPoolClientId || '',
  };
};


export default HomePage;
