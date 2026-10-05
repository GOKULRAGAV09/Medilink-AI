import Layout from '../../components/Layout';
import { useLanguage } from '../../context/LanguageContext';
import './OrderTracking.css';

const STEPS = [
  { key: 'prescriptionReceived', icon: '📋', id: 1 },
  { key: 'prescriptionVerified', icon: '✅', id: 2 },
  { key: 'medicinesBeingPreparedStep', icon: '⚗️', id: 3 },
  { key: 'readyForPickup', icon: '🛍️', id: 4 },
  { key: 'completed', icon: '✔️', id: 5 },
];

const CURRENT_STEP = 3;

export default function OrderTracking() {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="page-container animate-fade-in">
        <div className="page-header">
          <h1 className="page-title">📦 {t('orderTracking')}</h1>
          <p className="page-subtitle">Track your pharmacy order — Demo only</p>
        </div>

        {/* Order Info */}
        <div className="order-info-card">
          <div className="order-info-row">
            <div className="order-info-col">
              <span className="order-info-label">Order Number</span>
              <span className="order-info-value">#ML1024</span>
            </div>
            <div className="order-info-col">
              <span className="order-info-label">{t('orderStatus')}</span>
              <span className="order-info-value order-info-value--status">{t('medicinesBeingPrepared')}</span>
            </div>
            <div className="order-info-col">
              <span className="order-info-label">{t('estimatedPickup')}</span>
              <span className="order-info-value">Today, 5:30 PM</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-section">
          <h2 className="timeline-title">Order Timeline</h2>
          <div className="timeline">
            {STEPS.map((step, index) => {
              const isDone = step.id < CURRENT_STEP;
              const isCurrent = step.id === CURRENT_STEP;
              const isPending = step.id > CURRENT_STEP;
              return (
                <div key={step.id} className={`timeline-step ${isCurrent ? 'timeline-step--current' : isDone ? 'timeline-step--done' : 'timeline-step--pending'}`}>
                  <div className="timeline-step__left">
                    <div className={`timeline-step__circle ${isCurrent ? 'timeline-step__circle--current' : isDone ? 'timeline-step__circle--done' : ''}`}>
                      {isDone ? '✓' : <span>{step.icon}</span>}
                    </div>
                    {index < STEPS.length - 1 && (
                      <div className={`timeline-step__line ${isDone ? 'timeline-step__line--done' : isCurrent ? 'timeline-step__line--partial' : ''}`} />
                    )}
                  </div>
                  <div className="timeline-step__content">
                    <div className="timeline-step__title">{t(step.key)}</div>
                    {isCurrent && (
                      <div className="timeline-step__badge">In Progress</div>
                    )}
                    {isDone && (
                      <div className="timeline-step__done-badge">Completed</div>
                    )}
                    {isPending && (
                      <div className="timeline-step__pending-text">Upcoming</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="demo-notice">
          <span className="demo-notice__icon">ℹ️</span>
          <span>This is a <strong>demo</strong>. Not connected to a real pharmacy system.</span>
        </div>
      </div>
    </Layout>
  );
}
