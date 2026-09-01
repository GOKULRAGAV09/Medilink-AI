import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Page.css';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>('');

  const showMessage = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 3000);
  };

  const handleChangePharmacy = () => {
    showMessage('Pharmacy selection is a prototype feature.');
  };

  const handleSetting = (setting: string) => {
    showMessage(`Demo: ${setting} clicked.`);
  };

  return (
    <div className="profile-page">
      {/* Header */}
      <header className="profile-header">
        <h1>My Profile</h1>
      </header>

      {/* Demo user card */}
      <section className="user-card">
        <h2>Demo User (Demo Info)</h2>
        <p><strong>Email:</strong> demo@medilink.example</p>
        <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
      </section>

      {/* Preferred Pharmacy */}
      <section className="pharmacy-section">
        <p><strong>Preferred Pharmacy:</strong> Medilink Demo Pharmacy</p>
        <button onClick={handleChangePharmacy}>Change Pharmacy</button>
      </section>

      {/* Settings */}
      <section className="settings-section">
        <h3>Settings</h3>
        <ul>
          <li><button onClick={() => handleSetting('Notifications')}>Notifications</button></li>
          <li><button onClick={() => handleSetting('Privacy')}>Privacy</button></li>
          <li><button onClick={() => handleSetting('Help & Support')}>Help &amp; Support</button></li>
        </ul>
      </section>

      {/* About */}
      <section className="about-section">
        <p><strong>Medilink AI</strong></p>
        <p>Prototype for Project Better Tomorrow</p>
      </section>

      {/* Safety/Privacy message */}
      <section className="safety-section">
        <p>Do not enter real medical or prescription information in this prototype.</p>
      </section>

      {/* Navigation */}
      <section className="profile-nav">
        <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
      </section>

      {/* Bottom navigation consistent with app */}
      <nav className="bottom-nav">
        <button onClick={() => navigate('/dashboard')}>Dashboard</button>
        <button onClick={() => navigate('/orders')}>Orders</button>
        <button onClick={() => navigate('/token')}>Token</button>
        <button onClick={() => navigate('/assistant')}>Assistant</button>
        <button onClick={() => navigate('/profile')}>Profile</button>
      </nav>

      {/* Temporary message display */}
      {message && <div className="temp-message">{message}</div>}
    </div>
  );
};

export default Profile;
