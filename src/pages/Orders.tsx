import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Orders.css';

const stages = [
  'Prescription Received',
  'Prescription Verified',
  'Medicines Being Prepared',
  'Ready for Pickup',
  'Order Completed',
];

type OrderInfo = {
  orderNumber: string;
  pharmacy: string;
  medicines: string[];
};

const orderInfo: OrderInfo = {
  orderNumber: '#ML1024',
  pharmacy: 'Medilink Demo Pharmacy',
  medicines: ['Paracetamol 500mg', 'Cetirizine 10mg', 'Ibuprofen 200mg'],
};

const Orders: React.FC = () => {
  const navigate = useNavigate();
  const [stageIdx, setStageIdx] = useState<number>(2); // start at "Medicines Being Prepared"
  const [message, setMessage] = useState<string>('');

  const advanceStage = () => {
    if (stageIdx < stages.length - 1) {
      const newIdx = stageIdx + 1;
      setStageIdx(newIdx);
      if (newIdx === stages.length - 1) {
        setMessage('Your order is now ready for pickup.');
      } else {
        setMessage('');
      }
    }
  };

  return (
    <div className="orders-page">
      <header className="orders-header">
        <button className="back-btn" onClick={() => navigate(-1)}>{'← Back'}</button>
        <h1>Order Tracking</h1>
      </header>

      <section className="order-card">
        <p><strong>Order Number:</strong> {orderInfo.orderNumber}</p>
        <p><strong>Pharmacy:</strong> {orderInfo.pharmacy}</p>
        <p><strong>Status:</strong> {stages[stageIdx]}</p>
      </section>

      <section className="timeline">
        {stages.map((stage, idx) => (
          <div
            key={stage}
            className={`timeline-item ${idx === stageIdx ? 'current' : ''} ${idx < stageIdx ? 'completed' : ''}`}
          >
            <span className="indicator">
              {idx < stageIdx ? '✓' : idx === stageIdx ? '●' : '○'}
            </span>
            <span className="stage-name">{stage}</span>
          </div>
        ))}
      </section>

      <section className="estimated-pickup">
        <h2>Estimated pickup</h2>
        <p>Today, 5:30 PM</p>
      </section>

      <section className="medicines">
        <h2>Medicines (Demo Data)</h2>
        <ul>
          {orderInfo.medicines.map((med) => (
            <li key={med}>{med}</li>
          ))}
        </ul>
      </section>

      <section className="token-connection">
        <p><strong>Pharmacy Token:</strong> A24</p>
        <button className="token-btn" onClick={() => navigate('/token')}>View My Token</button>
      </section>

      {message && <p className="update-message">{message}</p>}

      <div className="actions">
        <button className="simulate-btn" onClick={advanceStage}>Simulate Order Update</button>
        <button className="back-dashboard-btn" onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
        <button className="view-token-btn" onClick={() => navigate('/token')}>View Token</button>
      </div>
    </div>
  );
};

export default Orders;



