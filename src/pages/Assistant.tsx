import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Page.css';

// Simple demo assistant with safety restrictions
const Assistant: React.FC = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Array<{ sender: 'assistant' | 'user'; text: string }>>([
    { sender: 'assistant', text: 'Hi! I can help you understand the sample prescription information in this demo.' },
  ]);
  const [input, setInput] = useState('');

  const safetyResponses = 'Please consult a qualified doctor or pharmacist for medical advice.';

  const predefinedAnswers: Record<string, string> = {
    'what medicines are in my prescription?':
      'The demo prescription contains Paracetamol 500mg, Cetirizine 10mg, and Ibuprofen 200mg. Please verify all medication information with your doctor or pharmacist.',
    'how many medicines are listed?': 'There are three medicines listed in the demo prescription.',
    'how do i check my pharmacy order?': 'You can view your order status on the Dashboard under "Order Tracking" or navigate to the Orders page.',
    'what is my pharmacy token?': 'Your pharmacy token is A24. You can view it on the Token page.',
  };

  const addMessage = (sender: 'assistant' | 'user', text: string) => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  const handleSuggested = (question: string) => {
    const q = question.toLowerCase();
    addMessage('user', question);
    const answer = predefinedAnswers[q] || safetyResponses;
    addMessage('assistant', answer);
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    addMessage('user', trimmed);
    const key = trimmed.toLowerCase();
    const answer = predefinedAnswers[key] || safetyResponses;
    addMessage('assistant', answer);
    setInput('');
  };

  return (
    <div className="assistant-page">
      {/* Header */}
      <header className="assistant-header">
        <button className="back-btn" onClick={() => navigate(-1)}>{'← Back'}</button>
        <h1>AI Medicine Assistant</h1>
        <p className="subtitle">Simple information about your prescription</p>
      </header>

      {/* Safety notice */}
      <section className="safety-notice">
        <p>
          Medilink AI provides prototype information only. It does not diagnose conditions or replace a doctor or pharmacist.
        </p>
      </section>

      {/* Chat area */}
      <section className="chat-area">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.sender}`}>
            <span>{msg.text}</span>
          </div>
        ))}
      </section>

      {/* Suggested questions */}
      <section className="suggested-questions">
        {['What medicines are in my prescription?', 'How many medicines are listed?', 'How do I check my pharmacy order?', 'What is my pharmacy token?'].map((q) => (
          <button key={q} className="suggested-btn" onClick={() => handleSuggested(q)}>{q}</button>
        ))}
      </section>

      {/* Text input */}
      <section className="input-area">
        <input
          type="text"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </section>

      {/* Navigation */}
      <section className="assistant-nav">
        <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
        <button onClick={() => navigate('/token')}>View My Token</button>
        <button onClick={() => navigate('/orders')}>Track My Order</button>
      </section>
    </div>
  );
};

export default Assistant;
