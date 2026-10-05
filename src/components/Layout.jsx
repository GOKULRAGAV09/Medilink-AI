import Navbar from './Navbar';
import { useLanguage } from '../context/LanguageContext';
import './Layout.css';

export default function Layout({ children }) {
  const { t } = useLanguage();
  return (
    <div className="layout">
      <Navbar />
      <main className="layout__main">
        {children}
      </main>
      <footer className="layout__footer">
        <div className="layout__footer-inner">
          <p className="layout__disclaimer">⚕️ {t('disclaimer')}</p>
        </div>
      </footer>
    </div>
  );
}
