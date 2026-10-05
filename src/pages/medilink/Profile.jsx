import Layout from '../../components/Layout';
import { useLanguage } from '../../context/LanguageContext';
import './Profile.css';

const PROFILE_DATA = {
  name: 'Demo Patient',
  email: 'demo@medilink.ai',
  phone: '+91 98765 43210',
  dob: '01 Jan 1990',
  bloodGroup: 'O+',
  allergies: 'None declared',
  token: 'A24',
  activeOrder: '#ML1024',
};

export default function Profile() {
  const { t, lang, setLang } = useLanguage();

  return (
    <Layout>
      <div className="page-container animate-fade-in">
        <div className="page-header">
          <h1 className="page-title">👤 {t('profile')}</h1>
          <p className="page-subtitle">Your demo profile — No real patient data stored</p>
        </div>

        {/* Language Switcher Section */}
        <div className="profile-section">
          <h2 className="profile-section-title">{t('language')} Settings</h2>
          <div className="profile-lang-card">
            <div className="profile-lang-info">
              <span className="profile-lang-icon">🌐</span>
              <div>
                <div className="profile-lang-title">Interface Language</div>
                <div className="profile-lang-sub">Choose your preferred language</div>
              </div>
            </div>
            <div className="profile-lang-toggle">
              <button
                className={`profile-lang-btn ${lang === 'en' ? 'profile-lang-btn--active' : ''}`}
                onClick={() => setLang('en')}
              >
                🇬🇧 English
              </button>
              <button
                className={`profile-lang-btn ${lang === 'ta' ? 'profile-lang-btn--active' : ''}`}
                onClick={() => setLang('ta')}
              >
                🇮🇳 தமிழ்
              </button>
            </div>
          </div>
        </div>

        {/* Profile Card */}
        <div className="profile-section">
          <h2 className="profile-section-title">Patient Information</h2>
          <div className="profile-card">
            <div className="profile-avatar">
              <span className="profile-avatar__icon">👤</span>
            </div>
            <div className="profile-info-grid">
              {[
                { label: 'Full Name', value: PROFILE_DATA.name },
                { label: 'Email', value: PROFILE_DATA.email },
                { label: 'Phone', value: PROFILE_DATA.phone },
                { label: 'Date of Birth', value: PROFILE_DATA.dob },
                { label: 'Blood Group', value: PROFILE_DATA.bloodGroup },
                { label: 'Allergies', value: PROFILE_DATA.allergies },
              ].map((item) => (
                <div key={item.label} className="profile-info-row">
                  <span className="profile-info-label">{item.label}</span>
                  <span className="profile-info-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Status */}
        <div className="profile-section">
          <h2 className="profile-section-title">Current Status</h2>
          <div className="profile-status-grid">
            <div className="profile-status-card">
              <span className="profile-status-icon">🎫</span>
              <span className="profile-status-label">{t('currentToken')}</span>
              <span className="profile-status-val">{PROFILE_DATA.token}</span>
            </div>
            <div className="profile-status-card">
              <span className="profile-status-icon">📦</span>
              <span className="profile-status-label">Active Order</span>
              <span className="profile-status-val">{PROFILE_DATA.activeOrder}</span>
            </div>
          </div>
        </div>

        <div className="demo-notice">
          <span className="demo-notice__icon">ℹ️</span>
          <span>This is a <strong>demo profile</strong>. No real patient data is stored or processed.</span>
        </div>
      </div>
    </Layout>
  );
}
