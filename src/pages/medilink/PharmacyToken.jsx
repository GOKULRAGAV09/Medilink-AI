import { useState } from 'react';
import Layout from '../../components/Layout';
import { useLanguage } from '../../context/LanguageContext';
import './PharmacyToken.css';

export default function PharmacyToken() {
  const { t } = useLanguage();
  const [notifDismissed, setNotifDismissed] = useState(false);

  return (
    <Layout>
      <div className="page-container animate-fade-in">
        <div className="page-header">
          <h1 className="page-title">🎫 {t('pharmacyToken')}</h1>
          <p className="page-subtitle">Real-time token queue status — Demo only</p>
        </div>

        {/* Notification Banner */}
        {!notifDismissed && (
          <div className="token-notif animate-fade-in">
            <div className="token-notif__icon">🔔</div>
            <div className="token-notif__body">
              <div className="token-notif__title">{t('yourTurnApproaching')}</div>
              <div className="token-notif__msg">{t('tokenSoonMessage')}</div>
            </div>
            <button
              className="token-notif__close"
              onClick={() => setNotifDismissed(true)}
              aria-label="Dismiss notification"
            >✕</button>
          </div>
        )}

        {/* Token Display */}
        <div className="token-main-grid">
          <div className="token-card token-card--your">
            <div className="token-card__label">{t('currentToken')}</div>
            <div className="token-card__number">A24</div>
            <div className="token-card__tag">Your Token</div>
          </div>

          <div className="token-card token-card--serving">
            <div className="token-card__label">{t('currentlyServing')}</div>
            <div className="token-card__number token-card__number--serving">A21</div>
            <div className="token-card__sub">At Counter 2</div>
          </div>

          <div className="token-card token-card--wait">
            <div className="token-card__label">{t('peopleAhead')}</div>
            <div className="token-card__number token-card__number--people">3</div>
            <div className="token-card__sub">patients</div>
          </div>

          <div className="token-card token-card--time">
            <div className="token-card__label">{t('estimatedWaitingTime')}</div>
            <div className="token-card__number token-card__number--time">12</div>
            <div className="token-card__sub">{t('minutes')}</div>
          </div>
        </div>

        {/* Queue Visual */}
        <div className="queue-section">
          <h2 className="queue-title">Queue Status</h2>
          <div className="queue-list">
            {['A19', 'A20', 'A21', 'A22', 'A23', 'A24'].map((token, i) => (
              <div
                key={token}
                className={`queue-item ${
                  token === 'A21' ? 'queue-item--current' :
                  i < 3 ? 'queue-item--done' : token === 'A24' ? 'queue-item--yours' : 'queue-item--waiting'
                }`}
              >
                <span className="queue-item__token">{token}</span>
                <span className="queue-item__status">
                  {token === 'A21' ? '⚡ Serving' : i < 3 ? '✓ Done' : token === 'A24' ? '⭐ You' : '⏳ Waiting'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Badge */}
        <div className="demo-notice">
          <span className="demo-notice__icon">ℹ️</span>
          <span>This is a <strong>demo</strong>. No real SMS, WhatsApp, email or push notifications are sent.</span>
        </div>
      </div>
    </Layout>
  );
}
