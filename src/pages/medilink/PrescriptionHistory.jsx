import { useState } from 'react';
import Layout from '../../components/Layout';
import { useLanguage } from '../../context/LanguageContext';
import './PrescriptionHistory.css';

const PRESCRIPTIONS = [
  {
    id: '#P1024',
    date: '05 Oct 2026',
    doctor: 'Dr. Ramesh Kumar',
    hospital: 'City General Hospital',
    medicines: ['Paracetamol 500mg x 10', 'Cetirizine 10mg x 7'],
    status: 'completed',
    diagnosis: 'Common cold & mild fever',
  },
  {
    id: '#P1018',
    date: '28 Sep 2026',
    doctor: 'Dr. Priya Nair',
    hospital: 'Apollo Clinic',
    medicines: ['Ibuprofen 200mg x 15', 'Omeprazole 20mg x 10'],
    status: 'completed',
    diagnosis: 'Mild pain management',
  },
  {
    id: '#P1009',
    date: '20 Sep 2026',
    doctor: 'Dr. Arjun Singh',
    hospital: 'MediCare Centre',
    medicines: ['Metformin 500mg x 30'],
    status: 'completed',
    diagnosis: 'Routine checkup',
  },
];

export default function PrescriptionHistory() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(null);

  return (
    <Layout>
      <div className="page-container animate-fade-in">
        <div className="page-header">
          <h1 className="page-title">📜 {t('prescriptionHistory')}</h1>
          <p className="page-subtitle">Your demo prescription records — No real patient data</p>
        </div>

        <div className="rx-list">
          {PRESCRIPTIONS.map((rx) => (
            <div key={rx.id} className="rx-card">
              <div className="rx-card__main">
                <div className="rx-card__left">
                  <div className="rx-card__id">{rx.id}</div>
                  <div className="rx-card__meta">
                    <span className="rx-card__date">📅 {rx.date}</span>
                    <span className="rx-card__doctor">👨‍⚕️ {rx.doctor}</span>
                    <span className="rx-card__hospital">🏥 {rx.hospital}</span>
                  </div>
                </div>
                <div className="rx-card__right">
                  <span className="badge--ok rx-status-badge">{t('completed')}</span>
                  <button
                    className="rx-details-btn"
                    onClick={() => setSelected(selected === rx.id ? null : rx.id)}
                    aria-expanded={selected === rx.id}
                  >
                    {selected === rx.id ? 'Hide Details ↑' : `${t('viewDetails')} ↓`}
                  </button>
                </div>
              </div>

              {selected === rx.id && (
                <div className="rx-card__details animate-fade-in">
                  <div className="rx-detail-section">
                    <h4 className="rx-detail-heading">Medicines Prescribed</h4>
                    <ul className="rx-med-list">
                      {rx.medicines.map((m, i) => (
                        <li key={i} className="rx-med-item">
                          <span className="rx-med-icon">💊</span> {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rx-detail-section">
                    <h4 className="rx-detail-heading">Notes</h4>
                    <p className="rx-detail-note">Diagnosis context: {rx.diagnosis}</p>
                  </div>
                  <div className="rx-demo-flag">
                    ⚠️ <strong>Demo data only.</strong> No real prescriptions stored.
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="demo-notice">
          <span className="demo-notice__icon">ℹ️</span>
          <span>No real prescriptions are stored or displayed. This is <strong>demo data</strong> for prototype purposes only.</span>
        </div>
      </div>
    </Layout>
  );
}
