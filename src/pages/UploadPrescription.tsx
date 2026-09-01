import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './UploadPrescription.css';

type UploadState = 'idle' | 'processing' | 'complete';

const UploadPrescription: React.FC = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<UploadState>('idle');
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Refs for hidden inputs
  const imageInputRef = useRef<HTMLInputElement>(null);
  const pdfInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const startProcessing = () => {
    setState('processing');
    setTimeout(() => setState('complete'), 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] || null;
    if (selected) {
      setFile(selected);
      if (selected.type.startsWith('image/')) {
        setPreviewUrl(URL.createObjectURL(selected));
      } else {
        setPreviewUrl(null);
      }
    }
  };

  const handleGallery = () => {
    imageInputRef.current?.click();
  };

  const handlePdf = () => {
    pdfInputRef.current?.click();
  };

  const handleCamera = () => {
    cameraInputRef.current?.click();
  };

  const removeFile = () => {
    setFile(null);
    setPreviewUrl(null);
  };

  const analyze = () => {
    startProcessing();
  };

  return (
    <div className="upload-page">
      <header className="upload-header">
        <button className="back-btn" onClick={() => navigate(-1)}>{"← Back"}</button>
        <h1>Upload Prescription</h1>
        <p className="subtitle">Upload a clear photo or PDF of your prescription.</p>
      </header>

      {/* Hidden inputs */}
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={imageInputRef}
        onChange={handleFileChange}
      />
      <input
        type="file"
        accept="application/pdf"
        style={{ display: 'none' }}
        ref={pdfInputRef}
        onChange={handleFileChange}
      />
      <input
        type="file"
        accept="image/*"
        capture="environment"
        style={{ display: 'none' }}
        ref={cameraInputRef}
        onChange={handleFileChange}
      />

      {state === 'idle' && (
        <div className="upload-area">
          {!file ? (
            <>
              <button className="upload-btn" onClick={handleGallery}>Upload from Gallery</button>
              <button className="upload-btn" onClick={handleCamera}>Take Photo</button>
              <button className="upload-btn" onClick={handlePdf}>Upload PDF</button>
              <p className="supported">Supported formats: JPG, PNG, PDF</p>
            </>
          ) : (
            <div className="file-info">
              <p><strong>Selected file:</strong> {file.name}</p>
              {previewUrl && <img src={previewUrl} alt="preview" className="preview-img" />}
              <button className="remove-btn" onClick={removeFile}>Remove</button>
              <button className="analyze-btn" onClick={analyze}>Analyze Prescription</button>
            </div>
          )}
        </div>
      )}

      {state === 'processing' && (
        <div className="processing">
          <div className="spinner" />
          <p>Analyzing prescription...</p>
        </div>
      )}

      {state === 'complete' && (
        <div className="summary">
          <h2>Demo AI Analysis</h2>
          <p><strong>Sample medicines:</strong></p>
          <ul className="medicine-list">
            <li>Paracetamol 500mg</li>
            <li>Cetirizine 10mg</li>
            <li>Ibuprofen 200mg</li>
          </ul>
          <p className="safety">
            This is a prototype demonstration and not medical advice. Always verify medicines and dosage with a qualified healthcare professional.
          </p>
          <div className="action-buttons">
            <button className="token-btn" onClick={() => navigate('/token')}>Get Pharmacy Token</button>
            <button className="demo-btn" onClick={() => navigate('/demo')}>View Prescription</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadPrescription;
