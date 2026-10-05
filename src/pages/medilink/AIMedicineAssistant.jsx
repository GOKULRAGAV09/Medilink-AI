import { useState } from 'react';
import Layout from '../../components/Layout';
import { useLanguage } from '../../context/LanguageContext';
import './AIMedicineAssistant.css';

const DEMO_QA = [
  {
    q: 'What is Paracetamol used for?',
    a: 'Paracetamol (also known as acetaminophen) is commonly used to relieve mild to moderate pain, such as headaches, toothaches, and muscle aches. It is also used to reduce fever. Always follow your doctor\'s prescription and recommended dosage.',
  },
  {
    q: 'Can I take Ibuprofen with food?',
    a: 'Yes, Ibuprofen is generally recommended to be taken with food or milk to reduce the risk of stomach upset. Always consult your pharmacist or doctor for specific advice regarding your condition.',
  },
  {
    q: 'What does Cetirizine treat?',
    a: 'Cetirizine is an antihistamine used to relieve allergy symptoms such as runny nose, sneezing, itchy or watery eyes, and itching of the skin. It is commonly prescribed for hay fever and allergic reactions.',
  },
];

export default function AIMedicineAssistant() {
  const { t } = useLanguage();
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hello! I\'m the MediLink AI Medicine Assistant (Demo). I can answer general questions about medicines. Please note: I do not provide medical diagnosis. Always consult a qualified healthcare professional.' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);
    setTimeout(() => {
      const matched = DEMO_QA.find(qa => qa.q.toLowerCase().includes(userMsg.toLowerCase().split(' ')[0]));
      const reply = matched
        ? matched.a
        : 'I\'m a demo assistant and can only answer questions about Paracetamol, Ibuprofen, and Cetirizine in this prototype. Please consult your pharmacist for detailed information.';
      setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
      setLoading(false);
    }, 1200);
  };

  const handleQuick = (qa) => {
    setMessages(prev => [...prev,
      { role: 'user', text: qa.q },
      { role: 'assistant', text: qa.a },
    ]);
  };

  return (
    <Layout>
      <div className="page-container animate-fade-in">
        <div className="page-header">
          <h1 className="page-title">🤖 {t('aiMedicineAssistant')}</h1>
          <p className="page-subtitle">Demo AI assistant — Does not provide medical diagnosis</p>
        </div>

        <div className="ai-chat">
          {/* Quick Questions */}
          <div className="ai-quick-questions">
            <span className="ai-quick-label">Quick questions:</span>
            {DEMO_QA.map((qa, i) => (
              <button key={i} className="ai-quick-btn" onClick={() => handleQuick(qa)}>
                {qa.q}
              </button>
            ))}
          </div>

          {/* Messages */}
          <div className="ai-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`ai-msg ai-msg--${msg.role}`}>
                <div className="ai-msg__avatar">
                  {msg.role === 'assistant' ? '🤖' : '👤'}
                </div>
                <div className="ai-msg__bubble">
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="ai-msg ai-msg--assistant">
                <div className="ai-msg__avatar">🤖</div>
                <div className="ai-msg__bubble ai-msg__bubble--loading">
                  <span className="ai-typing-dot" />
                  <span className="ai-typing-dot" />
                  <span className="ai-typing-dot" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="ai-input-row">
            <input
              className="ai-input"
              type="text"
              placeholder="Ask about a medicine... (Demo)"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              aria-label="Ask a medicine question"
            />
            <button className="ai-send-btn" onClick={handleSend} disabled={!input.trim() || loading}>
              Send ↗
            </button>
          </div>
        </div>

        <div className="demo-notice">
          <span className="demo-notice__icon">⚕️</span>
          <span><strong>Safety Disclaimer:</strong> {t('disclaimer')}</span>
        </div>
      </div>
    </Layout>
  );
}
