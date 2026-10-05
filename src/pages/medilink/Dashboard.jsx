import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { useLanguage } from '../../context/LanguageContext';
import './Dashboard.css';

const QUICK_ACTIONS = [
  { to: '/upload-prescription', icon: '📋', key: 'uploadPrescription', color: 'blue' },
  { to: '/pharmacy-token', icon: '🎫', key: 'pharmacyToken', color: 'green' },
  { to: '/order-tracking', icon: '📦', key: 'orderTracking', color: 'orange' },
  { to: '/medicine-availability', icon: '💊', key: 'medicineAvailability', color: 'purple' },
  { to: '/prescription-history', icon: '📜', key: 'prescriptionHistory', color: 'teal' },
  { to: '/ai-assistant', icon: '🤖', key: 'aiMedicineAssistant', color: 'pink' },
];

export default function Dashboard() {
  const { t } = useLanguage();
  const hour = new Date().getHours();
  const greeting = hour < 12 ? t('goodMorning') : hour < 17 ? 'Good Afternoon' : 'Good Evening';

  return (
    <Layout>
      <div className="dashboard">
        {/* Greeting */}
        <div className="dashboard__greeting animate-fade-in">
          <h1 className="dashboard__greeting-text">{greeting} 👋</h1>
          <p className="dashboard__greeting-sub">Welcome back, Demo Patient</p>
        </div>

        {/* Stats Row */}
        <div className="dashboard__stats animate-fade-in">
          {/* Token Card */}
          <div className="dash-card dash-card--token">
            <div className="dash-card__header">
              <span className="dash-card__icon">🎫</span>
              <span className="dash-card__title">{t('pharmacyToken')}</span>
            </div>
            <div className="dash-card__body">
              <div className="dash-token-row">
                <div className="dash-token-col">
                  <span className="dash-token-label">{t('currentToken')}</span>
                  <span className="dash-token-value dash-token-value--your">A24</span>
                </div>
                <div className="dash-token-col">
                  <span className="dash-token-label">{t('currentlyServing')}</span>
                  <span className="dash-token-value">A21</span>
                </div>
              </div>
              <div className="dash-token-wait">
                <span className="dash-token-wait-label">⏱ {t('estimatedWaitingTime')}:</span>
                <span className="dash-token-wait-val">12 {t('minutes')}</span>
              </div>
            </div>
            <Link to="/pharmacy-token" className="dash-card__link">{t('viewToken')} →</Link>
          </div>

          {/* Order Card */}
          <div className="dash-card dash-card--order">
            <div className="dash-card__header">
              <span className="dash-card__icon">📦</span>
              <span className="dash-card__title">{t('orderTracking')}</span>
            </div>
            <div className="dash-card__body">
              <div className="dash-order-id">#ML1024</div>
              <div className="dash-order-status">
                <span className="dash-status-dot dash-status-dot--preparing" />
                {t('medicinesBeingPrepared')}
              </div>
              <div className="dash-order-eta">📅 Today, 5:30 PM</div>
            </div>
            <Link to="/order-tracking" className="dash-card__link">{t('trackOrder')} →</Link>
          </div>

          {/* Medicine Availability Card */}
          <div className="dash-card dash-card--medicine">
            <div className="dash-card__header">
              <span className="dash-card__icon">💊</span>
              <span className="dash-card__title">{t('medicineAvailability')}</span>
            </div>
            <div className="dash-card__body">
              <div className="dash-med-stat">
                <span className="dash-med-badge dash-med-badge--available">2 {t('available')}</span>
                <span className="dash-med-badge dash-med-badge--limited">1 {t('limitedStock')}</span>
              </div>
            </div>
            <Link to="/medicine-availability" className="dash-card__link">{t('viewMedicines')} →</Link>
          </div>

          {/* Recent Prescription Card */}
          <div className="dash-card dash-card--rx">
            <div className="dash-card__header">
              <span className="dash-card__icon">📜</span>
              <span className="dash-card__title">{t('recentPrescription')}</span>
            </div>
            <div className="dash-card__body">
              <div className="dash-rx-id">#P1024</div>
              <div className="dash-rx-date">05 Oct 2026</div>
              <div className="dash-rx-status">
                <span className="badge--ok dash-inline-badge">{t('completed')}</span>
              </div>
            </div>
            <Link to="/prescription-history" className="dash-card__link">{t('viewDetails')} →</Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="dashboard__section animate-fade-in">
          <h2 className="dashboard__section-title">{t('quickActions')}</h2>
          <div className="dashboard__actions">
            {QUICK_ACTIONS.map((action) => (
              <Link key={action.to} to={action.to} className={`action-card action-card--${action.color}`}>
                <span className="action-card__icon">{action.icon}</span>
                <span className="action-card__label">{t(action.key)}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
