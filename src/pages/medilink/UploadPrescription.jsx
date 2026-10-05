import { useState } from 'react';
import Layout from '../../components/Layout';
import { useLanguage } from '../../context/LanguageContext';
import './UploadPrescription.css';

export default function UploadPrescription() {
  const { t } = useLanguage();
  const [dragging, setDragging] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleDemo = () => setUploaded(true);
  const handleReset = () => setUploaded(false);

  return (
    <Layout>
      <div className="page-container animate-fade-in">
        <div className="page-header">
          <h1 className="page-title">📋 {t('uploadPrescription')}</h1>
          <p className="page-subtitle">Upload your prescription for pharmacy processing — Demo only</p>
        </div>

        {!uploaded ? (
          <div
            className={`upload-zone ${dragging ? 'upload-zone--drag' : ''}`}
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => { e.preventDefault(); setDragging(false); handleDemo(); }}
          >
            <div className="upload-zone__icon">📄</div>
            <h3 className="upload-zone__title">Drop your prescription here</h3>
            <p className="upload-zone__desc">Supports PDF, JPG, PNG — Max 10MB</p>
            <button className="upload-btn" onClick={handleDemo}>
              Choose File (Demo)
            </button>
            <div className="upload-demo-label">⚠️ Demo mode — No real files are stored or processed</div>
          </div>
        ) : (
          <div className="upload-success animate-fade-in">
            <div className="upload-success__icon">✅</div>
            <h3 className="upload-success__title">Prescription Uploaded!</h3>
            <p className="upload-success__msg">Your prescription has been submitted for verification. You will receive your token once verified.</p>
            <div className="upload-success__details">
              <div className="upload-detail-row">
                <span>Reference ID</span>
                <span className="upload-detail-val">#RX-DEMO-2026</span>
              </div>
              <div className="upload-detail-row">
                <span>Status</span>
                <span className="badge--ok upload-detail-badge">Under Review</span>
              </div>
              <div className="upload-detail-row">
                <span>Estimated Processing</span>
                <span className="upload-detail-val">30 minutes</span>
              </div>
            </div>
            <button className="upload-btn upload-btn--reset" onClick={handleReset}>
              Upload Another (Demo)
            </button>
          </div>
        )}

        <div className="demo-notice">
          <span className="demo-notice__icon">ℹ️</span>
          <span><strong>Demo only.</strong> No real prescription documents are uploaded, stored, or processed. Do not upload real patient documents.</span>
        </div>
      </div>
    </Layout>
  );
}
