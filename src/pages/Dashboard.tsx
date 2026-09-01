import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import QuickActionCard from '../components/QuickActionCard';
import './Dashboard.css';

// Mock data for demonstration
const tokenInfo = {
  current: 'A24',
  serving: 'A20',
  wait: 15,
};

const orderInfo = {
  id: 'ML1024',
  status: 'Preparing',
  pickup: 'Today, 5:30 PM',
};

const recentPrescription = {
  id: 'RX001',
  medicines: ['Paracetamol 500mg', 'Cetirizine 10mg', 'Ibuprofen 200mg'],
};

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      {/* Header */}
      <Header />

      {/* Welcome Section */}
      <section className="welcome-section">
        <h2>Good morning!</h2>
        <p>How can we help you today?</p>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <QuickActionCard label="Upload Prescription" to="/upload-prescription" icon="📤" />
        <QuickActionCard label="Get Pharmacy Token" to="/token" icon="🪙" />
        <QuickActionCard label="Track Order" to="/orders" icon="🚚" />
        <QuickActionCard label="AI Medicine Assistant" to="/assistant" icon="🤖" />
      </section>

      {/* Token Card */}
      <section className="card token-card">
        <h3>Pharmacy Token</h3>
        <p>Current token number: <strong>{tokenInfo.current}</strong></p>
        <p>Currently serving: <strong>{tokenInfo.serving}</strong></p>
        <p>Estimated waiting time: <strong>{tokenInfo.wait} minutes</strong></p>
        <Link to="/token" className="btn btn-primary">View Token</Link>
      </section>

      {/* Order Card */}
      <section className="card order-card">
        <h3>Medicine Order</h3>
        <p>Order #: <strong>{orderInfo.id}</strong></p>
        <p>Status: <strong>{orderInfo.status}</strong></p>
        <p>Estimated pickup: <strong>{orderInfo.pickup}</strong></p>
        <Link to="/orders" className="btn btn-primary">Track Order</Link>
      </section>

      {/* Recent Prescription */}
      <section className="card prescription-card">
        <h3>Recent Prescription</h3>
        <ul>
          {recentPrescription.medicines.map((med, i) => (
            <li key={i}>{med}</li>
          ))}
        </ul>
        <Link to="/demo" className="btn btn-secondary">View Prescription</Link>
      </section>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <Link to="/dashboard" className="nav-item active">Dashboard</Link>
        <Link to="/orders" className="nav-item">Orders</Link>
        <Link to="/token" className="nav-item">Token</Link>
        <Link to="/assistant" className="nav-item">Assistant</Link>
        <Link to="/profile" className="nav-item">Profile</Link>
      </nav>
    </div>
  );
};

export default Dashboard;
