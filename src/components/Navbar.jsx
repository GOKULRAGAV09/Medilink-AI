import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/dashboard', key: 'dashboard', icon: '🏠' },
  { to: '/upload-prescription', key: 'uploadPrescription', icon: '📋' },
  { to: '/pharmacy-token', key: 'pharmacyToken', icon: '🎫' },
  { to: '/order-tracking', key: 'orderTracking', icon: '📦' },
  { to: '/medicine-availability', key: 'medicineAvailability', icon: '💊' },
  { to: '/prescription-history', key: 'prescriptionHistory', icon: '📜' },
  { to: '/ai-assistant', key: 'aiMedicineAssistant', icon: '🤖' },
  { to: '/profile', key: 'profile', icon: '👤' },
];

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const location = useLocation();

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          <span className="navbar__brand-icon">⚕️</span>
          <span className="navbar__brand-name">MediLink <span className="navbar__brand-ai">AI</span></span>
        </Link>

        <div className="navbar__links">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="navbar__link"
              title={t(link.key)}
            >
              <span className="navbar__link-icon">{link.icon}</span>
              <span className="navbar__link-label">{t(link.key)}</span>
            </Link>
          ))}
        </div>

        <div className="navbar__right">
          <button
            className="lang-btn"
            onClick={() => setLang('en')}
            aria-label="Switch to English"
          >EN</button>
          <span className="lang-divider">|</span>
          <button
            className="lang-btn"
            onClick={() => setLang('ta')}
            aria-label="Switch to Tamil"
          >தமிழ்</button>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="mobile-nav">
        {NAV_LINKS.slice(0, 6).map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="mobile-nav__item"
          >
            <span className="mobile-nav__icon">{link.icon}</span>
            <span className="mobile-nav__label">{t(link.key).split(' ')[0]}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
