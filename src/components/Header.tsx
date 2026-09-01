import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">MEDILINK AI</Link>
      </div>
      <div className="header-center">
        <span className="greeting">Good morning, Demo User</span>
      </div>
      <div className="header-right">
        <button className="notification-btn" aria-label="Notifications">
          🔔
        </button>
      </div>
    </header>
  );
};

export default Header;
