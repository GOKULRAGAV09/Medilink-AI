import { Link } from 'react-router-dom';
import './Welcome.css';

const Welcome: React.FC = () => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">MEDILINK AI</h1>
      <p className="welcome-tagline">Making your pharmacy visit simpler.</p>
      <p className="welcome-description">
        Upload your prescription, manage your pharmacy token, track your medicine order, and get simple AI-assisted information — all in one place.
      </p>
      <div className="welcome-buttons">
        <Link to="/dashboard" className="btn btn-primary">Get Started</Link>
        <Link to="/dashboard" className="btn btn-secondary">Try Demo</Link>
      </div>
    </div>
  );
};

export default Welcome;
