import Layout from '../../components/Layout';
import { useLanguage } from '../../context/LanguageContext';
import './MedicineAvailability.css';

const MEDICINES = [
  {
    name: 'Paracetamol 500mg',
    category: 'Analgesic / Antipyretic',
    status: 'available',
    stock: 240,
    unit: 'tablets',
  },
  {
    name: 'Cetirizine 10mg',
    category: 'Antihistamine',
    status: 'available',
    stock: 180,
    unit: 'tablets',
  },
  {
    name: 'Ibuprofen 200mg',
    category: 'NSAID / Pain Relief',
    status: 'limited',
    stock: 15,
    unit: 'tablets',
  },
  {
    name: 'Amoxicillin 250mg',
    category: 'Antibiotic',
    status: 'out',
    stock: 0,
    unit: 'capsules',
  },
  {
    name: 'Metformin 500mg',
    category: 'Antidiabetic',
    status: 'available',
    stock: 320,
    unit: 'tablets',
  },
  {
    name: 'Omeprazole 20mg',
    category: 'Proton Pump Inhibitor',
    status: 'limited',
    stock: 8,
    unit: 'capsules',
  },
];

function StatusBadge({ status, t }) {
  const config = {
    available: { label: t('available'), cls: 'med-badge--available', icon: '✅' },
    limited: { label: t('limitedStock'), cls: 'med-badge--limited', icon: '⚠️' },
    out: { label: t('outOfStock'), cls: 'med-badge--out', icon: '❌' },
  };
  const c = config[status];
  return (
    <span className={`med-badge ${c.cls}`}>{c.icon} {c.label}</span>
  );
}

export default function MedicineAvailability() {
  const { t } = useLanguage();
  const available = MEDICINES.filter(m => m.status === 'available').length;
  const limited = MEDICINES.filter(m => m.status === 'limited').length;
  const out = MEDICINES.filter(m => m.status === 'out').length;

  return (
    <Layout>
      <div className="page-container animate-fade-in">
        <div className="page-header">
          <h1 className="page-title">💊 {t('medicineAvailability')}</h1>
          <p className="page-subtitle">Demo medicine inventory — Does not represent a real pharmacy</p>
        </div>

        {/* Summary Chips */}
        <div className="med-summary">
          <div className="med-summary-chip med-summary-chip--available">
            <span className="med-summary-chip__num">{available}</span>
            <span>{t('available')}</span>
          </div>
          <div className="med-summary-chip med-summary-chip--limited">
            <span className="med-summary-chip__num">{limited}</span>
            <span>{t('limitedStock')}</span>
          </div>
          <div className="med-summary-chip med-summary-chip--out">
            <span className="med-summary-chip__num">{out}</span>
            <span>{t('outOfStock')}</span>
          </div>
        </div>

        {/* Medicine Grid */}
        <div className="med-grid">
          {MEDICINES.map((med) => (
            <div key={med.name} className={`med-card med-card--${med.status}`}>
              <div className="med-card__top">
                <div className="med-card__info">
                  <h3 className="med-card__name">{med.name}</h3>
                  <p className="med-card__category">{med.category}</p>
                </div>
                <StatusBadge status={med.status} t={t} />
              </div>
              <div className="med-card__bottom">
                {med.stock > 0 ? (
                  <span className="med-card__stock">Stock: {med.stock} {med.unit}</span>
                ) : (
                  <span className="med-card__stock med-card__stock--out">Currently unavailable</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="demo-notice">
          <span className="demo-notice__icon">ℹ️</span>
          <span>This is <strong>demo data only</strong>. This does not represent real pharmacy inventory. Always consult your pharmacist for actual availability.</span>
        </div>
      </div>
    </Layout>
  );
}
