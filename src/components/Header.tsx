import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Link from 'next/link';

const Header = () => {
  const isAuthenticated = useSelector((state: RootState) => state.usersSlice.isAuthenticated);

  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Company Logo" />
      </div>
      <nav>
        <ul className="header-links">
          <li>
            <Link href="/" passHref legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref legacyBehavior>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/documentation" passHref legacyBehavior>
              <a>Documentation</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header-buttons">
        {!isAuthenticated ? (
          <>
            <Link href="/signup" passHref legacyBehavior>
              <a className="button">Signup</a>
            </Link>
            <Link href="/login" passHref legacyBehavior>
              <a className="button">Login</a>
            </Link>
          </>
        ) : null}
      </div>

      <style jsx>{`
        .header {
          background-color: blue;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
        }

        .header-links {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .header-links li {
          margin-right: 1rem;
        }

        .header-links a {
          font-size: 1.2rem;
          color: white;
          text-decoration: none;
        }

        .header-buttons {
          display: flex;
          align-items: center;
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
          height: 50px;
          width: auto;
        }
      `}</style>
    </header>
  );
};

export default Header;