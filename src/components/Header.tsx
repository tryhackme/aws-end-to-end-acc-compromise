import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Link from 'next/link';

const Header = () => {
  const isAuthenticated = useSelector((state: RootState) => state.usersSlice.isAuthenticated);

  return (
    <>
      <header className="header">
        <div className="nav-block">
          {isAuthenticated && (
            <Link href="/about" passHref legacyBehavior>
              <a>About Us</a>
            </Link>
          )}
          {!isAuthenticated && (
            <Link href="/playground" passHref legacyBehavior>
              <a>Developer Playground</a>
            </Link>
          )}
        </div>
        <div className="logo">
          <Link href="/" passHref legacyBehavior>
            <a>
              <img src="/best-cloud-company-logo.png" alt="Company Logo" className="logo-image" />
            </a>
          </Link>
        </div>
        <div className="nav-block">
          <Link href="/documentation" passHref legacyBehavior>
            <a>Documentation</a>
          </Link>
        </div>
      </header>

      <style jsx>{`
        .header {
          background-color: blue;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          width: 100%;
        }

        .nav-block {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .logo {
          display: flex;
          justify-content: center;
          align-items: center; 
        }

        a {
          font-size: 1.2rem;
          color: white;
          text-decoration: none;
        }

        .logo img {
          height: 150px;
          width: auto;
        }
      `}</style>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  );
};

export default Header;
