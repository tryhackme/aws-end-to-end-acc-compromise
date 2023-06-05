import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Link from 'next/link';
import { NextPage } from 'next'

interface HomePageProps {
  userPoolId: string;
  userPoolClientId: string;
}

const HomePage: NextPage<HomePageProps> = ({ userPoolId, userPoolClientId }) => {
  const isAuthenticated = useSelector((state: RootState) => state.usersSlice.isAuthenticated);

  return (
    <div className="container">
      <h1 className="title">Welcome to Best Cloud Company Dev Portal!</h1>
      <p className="description">This is the developer portal for our customer development teams, providing detailed documentation, examples, API reference, and more.</p>
      
      {!isAuthenticated && (
        <div className="login-button">
          <Link href="/login" passHref legacyBehavior>
            <a className="button">Login</a>
          </Link>
        </div>
      )}

      <style jsx>{`
        .container {
          text-align: center;
        }

        .title {
          font-size: 2rem;
          margin-top: 3rem;
        }

        .description {
          font-size: 1.5rem;
          margin: 1rem 0;
        }

        .login-button {
          text-align: center;
          margin-top: 2rem;
        }

        a.button {
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: blue;
          color: white;
          border: none;
          border-radius: 4px;
          text-decoration: none;
        }
      `}</style>
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
