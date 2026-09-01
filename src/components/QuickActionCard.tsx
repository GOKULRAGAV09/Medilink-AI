import React from 'react';
import { Link } from 'react-router-dom';
import './QuickActionCard.css';

type QuickActionCardProps = {
  label: string;
  to: string;
  icon: string; // can be emoji or SVG path
};

const QuickActionCard: React.FC<QuickActionCardProps> = ({ label, to, icon }) => {
  return (
    <Link to={to} className="quick-action-card">
      <div className="icon">{icon}</div>
      <div className="label">{label}</div>
    </Link>
  );
};

export default QuickActionCard;
