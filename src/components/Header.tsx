import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Link from 'next/link';

const Header = () => {
  const isAuthenticated = useSelector((state: RootState) => state.usersSlice.isAuthenticated);

  return (
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

      <style jsx>{`
        .header {
          background-color: blue;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .nav-block {
          margin: 0 2rem; 
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
    </header>
  );
};

export default Header;