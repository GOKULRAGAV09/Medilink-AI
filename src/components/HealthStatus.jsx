import { useState, useEffect } from 'react';
import './HealthStatus.css';

const BACKEND_URL = '/api/health';

const StatusDot = ({ connected }) => (
  <span className={`status-dot ${connected ? 'status-dot--online' : 'status-dot--offline'}`} />
);

function HealthStatus() {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastChecked, setLastChecked] = useState(null);

  const fetchHealth = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(BACKEND_URL);
      const data = await res.json();
      setHealth(data);
      setLastChecked(new Date().toLocaleTimeString());
    } catch (err) {
      setError('Unable to reach the backend server.');
      setHealth(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHealth();
    // Poll every 30 seconds
    const interval = setInterval(fetchHealth, 30000);
    return () => clearInterval(interval);
  }, []);

  const isApiOnline = !error && health?.status === 'ok';
  const isDbOnline = health?.database?.status === 'connected';

  return (
    <div className="health-card animate-fade-in">
      {/* Header */}
      <div className="health-card__header">
        <div className="health-card__title-row">
          <div className="health-card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <h3 className="health-card__title">System Health</h3>
        </div>
        <button
          className="health-card__refresh"
          onClick={fetchHealth}
          disabled={loading}
          aria-label="Refresh health status"
        >
          <svg
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            className={loading ? 'spin' : ''}
          >
            <polyline points="23 4 23 10 17 10" />
            <polyline points="1 20 1 14 7 14" />
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
          </svg>
        </button>
      </div>

      {/* Status Rows */}
      <div className="health-card__body">
        {/* API Server */}
        <div className="health-row">
          <div className="health-row__left">
            <StatusDot connected={isApiOnline} />
            <span className="health-row__label">API Server</span>
          </div>
          <span className={`health-row__badge ${isApiOnline ? 'badge--ok' : 'badge--error'}`}>
            {loading ? 'Checking…' : isApiOnline ? 'Online' : 'Offline'}
          </span>
        </div>

        {/* Database */}
        <div className="health-row">
          <div className="health-row__left">
            <StatusDot connected={isDbOnline} />
            <span className="health-row__label">PostgreSQL</span>
          </div>
          <span className={`health-row__badge ${isDbOnline ? 'badge--ok' : 'badge--warning'}`}>
            {loading ? 'Checking…' : isDbOnline ? 'Connected' : 'Disconnected'}
          </span>
        </div>

        {/* Details */}
        {health && !loading && (
          <div className="health-details">
            {health.environment && (
              <div className="health-detail-row">
                <span className="detail-key">Environment</span>
                <code className="detail-val">{health.environment}</code>
              </div>
            )}
            {health.uptime && (
              <div className="health-detail-row">
                <span className="detail-key">Uptime</span>
                <code className="detail-val">{health.uptime}</code>
              </div>
            )}
            {health.responseTime && (
              <div className="health-detail-row">
                <span className="detail-key">Response Time</span>
                <code className="detail-val">{health.responseTime}</code>
              </div>
            )}
            {health.version && (
              <div className="health-detail-row">
                <span className="detail-key">Version</span>
                <code className="detail-val">v{health.version}</code>
              </div>
            )}
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="health-error">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            {error}
          </div>
        )}
      </div>

      {/* Footer */}
      {lastChecked && (
        <div className="health-card__footer">
          Last checked: {lastChecked}
        </div>
      )}
    </div>
  );
}

export default HealthStatus;
