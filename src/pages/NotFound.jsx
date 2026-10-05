import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function NotFound() {
  const { t } = useLanguage();
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-6)',
      textAlign: 'center',
      padding: 'var(--space-8)',
    }}>
      <p style={{ fontSize: '5rem', fontWeight: 800, color: 'var(--text-muted)', lineHeight: 1 }}>404</p>
      <h1 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Page not found</h1>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '360px' }}>
        The page you are looking for does not exist yet. MediLink AI is still being built.
      </p>
      <Link to="/dashboard" style={{
        background: 'var(--gradient-brand)',
        color: 'white',
        padding: 'var(--space-3) var(--space-6)',
        borderRadius: 'var(--radius-md)',
        fontWeight: 600,
        fontSize: '0.9375rem',
        transition: 'opacity var(--transition-fast)',
        textDecoration: 'none',
      }}>
        🏠 Go to Dashboard
      </Link>
      <Link to="/" style={{
        color: 'var(--color-primary)',
        fontSize: '0.875rem',
        textDecoration: 'none',
      }}>
        {t('backToHome')}
      </Link>
    </main>
  );
}

export default NotFound;
