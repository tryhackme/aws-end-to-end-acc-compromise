import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Link from 'next/link';

const Header = () => {
  const isAuthenticated = useSelector((state: RootState) => state.usersSlice.isAuthenticated);

  return (
    <header className="header">
      <div className="nav-block">
        <Link href="/about" passHref legacyBehavior>
          <a>About</a>
        </Link>
      </div>
      <div className="logo">
        <img src="/best-cloud-company-logo.png" alt="Company Logo" className="logo-image" />
      </div>
      <div className="nav-block">
        <Link href="/documentation" passHref legacyBehavior>
          <a>Documentation</a>
        </Link>
      </div>
      <div className="header-buttons">
        {!isAuthenticated && (
          <>
            <Link href="/login" passHref legacyBehavior>
              <a className="button">Login</a>
            </Link>
          </>
        )}
      </div>

      <style jsx>{`
        .header {
          background-color: blue;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .nav-block {
          margin: 0 2rem; // Added horizontal margin to space the links
        }

        .logo {
          display: flex;
          justify-content: center;
          align-items: center; // Centers the logo vertically
        }

        a {
          font-size: 1.2rem;
          color: white;
          text-decoration: none;
        }

        .header-buttons {
          display: flex;
          align-items: center;
          position: absolute;
          right: 1rem;
        }

        .header-buttons a.button {
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: white;
          color: blue;
          border: none;
          border-radius: 4px;
          text-decoration: none;
          margin-left: 1rem;
        }

        .logo img {
          height: 150px;
          width: auto;
        }
      `}</style>
    </header>
  );
};

export default Header;