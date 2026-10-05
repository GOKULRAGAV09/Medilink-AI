import { Link } from 'react-router-dom';
import HealthStatus from '../components/HealthStatus';
import { useLanguage } from '../context/LanguageContext';
import './Home.css';

function Home() {
  const { t } = useLanguage();
  return (
    <main className="home">
      {/* Background Effects */}
      <div className="home__bg-glow home__bg-glow--1" aria-hidden="true" />
      <div className="home__bg-glow home__bg-glow--2" aria-hidden="true" />
      <div className="home__grid" aria-hidden="true" />

      <div className="container">
        {/* Hero */}
        <section className="hero animate-fade-in">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Platform Status
          </div>

          <h1 className="hero__title">
            <span className="hero__title-gradient">MediLink AI</span>
          </h1>

          <p className="hero__subtitle">
            Intelligent healthcare platform connecting patients, pharmacies,
            and providers — powered by AI.
          </p>

          <div className="hero__cta">
            <Link to="/dashboard" className="hero__btn hero__btn--primary">
              🏠 {t('dashboard')}
            </Link>
            <Link to="/dashboard" className="hero__btn hero__btn--secondary">
              {t('tryDemo')}
            </Link>
          </div>

          <div className="hero__stack-tags">
            {['Node.js', 'Express', 'PostgreSQL', 'React', 'Vite'].map((tag) => (
              <span key={tag} className="stack-tag">{tag}</span>
            ))}
          </div>
        </section>

        {/* Health Check Section */}
        <section className="health-section animate-fade-in">
          <div className="health-section__header">
            <h2 className="health-section__title">{t('systemStatus')}</h2>
            <p className="health-section__desc">
              {t('liveConnectivity')}
            </p>
          </div>

          <div className="health-section__grid">
            <HealthStatus />

            {/* Endpoint Reference Card */}
            <div className="endpoint-card">
              <h4 className="endpoint-card__title">API Endpoints</h4>
              <div className="endpoint-list">
                <div className="endpoint-item">
                  <span className="endpoint-method method--get">GET</span>
                  <code className="endpoint-path">/api/health</code>
                  <span className="endpoint-desc">Health check</span>
                </div>
                <div className="endpoint-divider" />
                <p className="endpoint-note">
                  More routes will be added as features are implemented. The frontend
                  proxies <code>/api/*</code> requests to{' '}
                  <code>http://localhost:5000</code>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
