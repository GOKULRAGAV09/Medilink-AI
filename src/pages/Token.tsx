import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Token.css';



const Token: React.FC = () => {
  const navigate = useNavigate();
  const [userToken, setUserToken] = useState<string>('A24');
  const [nowServing, setNowServing] = useState<string>('A20');
  const [queue, setQueue] = useState<string[]>(['A20', 'A21', 'A22', 'A23', 'A24']);
  const [notification, setNotification] = useState<string>('');

  const generateToken = () => {
    // Simple demo token generation: A + random number 10-99
    const newToken = `A${Math.floor(Math.random() * 90) + 10}`;
    setUserToken(newToken);
    // Ensure token appears at the end of the queue
    setQueue((prev) => [...prev, newToken]);
    setNotification('Your pharmacy token has been generated.');
  };

  const simulateUpdate = () => {
    // Advance the queue by removing first token
    setQueue((prev) => {
      const updated = prev.slice(1);
      // Update now serving to the new first token (if any)
      const newNow = updated[0] || '';
      setNowServing(newNow);
      // Notify if user's token is next
      if (updated[0] === userToken) {
        setNotification(`Your token ${userToken} is approaching.`);
      } else {
        setNotification('');
      }
      return updated;
    });
  };

  const peopleAhead = () => {
    const index = queue.indexOf(userToken);
    return index >= 0 ? index : 0;
  };

  const estimatedWait = () => {
    // Assume 5 minutes per person ahead as demo
    return peopleAhead() * 5;
  };

  return (
    <div className="token-page">
      {/* Header */}
      <header className="token-header">
        <button className="back-btn" onClick={() => navigate(-1)}>{"← Back"}</button>
        <h1>Pharmacy Token</h1>
      </header>

      {/* Current Token Card */}
      <div className="current-token-card">
        <div>
          <p>Your Token</p>
          <p className="token-number">{userToken}</p>
        </div>
        <div>
          <p>Now Serving</p>
          <p className="now-serving">{nowServing}</p>
        </div>
        <div>
          <p>People Ahead</p>
          <p>{peopleAhead()}</p>
        </div>
        <div>
          <p>Estimated Wait</p>
          <p>{estimatedWait()} minutes</p>
        </div>
      </div>

      {/* Generate Token */}
      <button className="generate-btn" onClick={generateToken}>Get New Token</button>

      {/* Queue Status */}
      <div className="queue-status">
        <h2>Queue</h2>
        <ul>
          {queue.map((t) => (
            <li
              key={t}
              className={
                t === nowServing
                  ? 'now-serving'
                  : t === userToken
                  ? 'your-token'
                  : ''
              }
            >
              {t} — {t === nowServing ? 'Now Serving' : 'Waiting'}
            </li>
          ))}
        </ul>
      </div>

      {/* Status messages */}
      <p className="status-message">
        Please stay nearby. We will notify you when your token is approaching.
      </p>

      {/* Notification simulation */}
      {notification && <div className="notification">{notification}</div>}
      <button className="simulate-btn" onClick={simulateUpdate}>Simulate Token Update</button>

      {/* Order connection */}
      <button className="track-order-btn" onClick={() => navigate('/orders')}>Track My Order</button>

      {/* Dashboard connection */}
      <button className="back-dashboard-btn" onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
    </div>
  );
};

export default Token;
