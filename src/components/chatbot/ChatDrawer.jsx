import { useEffect, useRef, useState } from 'react';
import MessageBubble from './MessageBubble.jsx';
import ChatInput from './ChatInput.jsx';
import mockChat from '../../data/mockChat.json';

const ASSISTANT_AVATAR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCjJfvu5YTDQlRYzbl84g2aHv_BOE3EbdenvdAjk9TA4TuFJz2Y2-k0pZz4X1cifDq6yX9bznIVAou9kdwbp0gEdCGn-9s_ps2iuan4DieVh4Pabkd5LyqvFugMiZ3iZppJdPT-ihzUKrH3shRllLD5wzz2Hk4MahXBOWgBw9u6GTqCZ8qTD9rdX9xnylTuyuTQ6-IfaX8eeB1tvAI7Y-pwDUKQTPlUddG_9mCHp0dNtn_qODtYaAtyWbT9RbGlBqNBH-YSBopC1a8E';

const QUICK_LINKS = [
  { label: 'Popular Programs', href: '#courses' },
  { label: 'Admission Process', href: '#admissions' },
  { label: 'Placement Stats', href: '#placements' },
  { label: 'FAQs', href: '#faqs' },
];

const MOCK_REPLIES = [
  'Based on our records, B.Tech CSE is a 4-year program covering AI, ML, and Data Structures.',
  'Admissions require 12th pass with at least 60% and a valid entrance exam score.',
  'The average placement package is 6 LPA, with the highest at 18 LPA.',
  "I can help with courses, admissions, fees, and placements. What would you like to know?",
];

function getMockReply(message) {
  const lower = message.toLowerCase();
  if (lower.includes('placement') || lower.includes('package') || lower.includes('salary')) {
    return MOCK_REPLIES[2];
  }
  if (lower.includes('admission') || lower.includes('eligibility') || lower.includes('apply')) {
    return MOCK_REPLIES[1];
  }
  if (lower.includes('course') || lower.includes('b.tech') || lower.includes('cse') || lower.includes('program')) {
    return MOCK_REPLIES[0];
  }
  return MOCK_REPLIES[3];
}

function ChatDrawer({ isOpen, onClose }) {
  const [tab, setTab] = useState('assistant');
  const [messages, setMessages] = useState(mockChat);
  const [isTyping, setIsTyping] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, isTyping, tab, isOpen]);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape' && isOpen) onClose();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  function handleStartNewChat() {
    setTab('assistant');
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'assistant',
        text: "Hi! I'm the College Help Desk assistant. Ask me about courses, admissions, or placements.",
      },
    ]);
  }

  function handleSend(text) {
    const userMessage = { id: `u-${Date.now()}`, role: 'user', text };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Mock AI response — replace with API call in Phase 6
    window.setTimeout(() => {
      const reply = {
        id: `a-${Date.now()}`,
        role: 'assistant',
        text: getMockReply(text),
      };
      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
    }, 700);
  }

  return (
    <>
      <div
        className={`chat-drawer-overlay${isOpen ? ' is-open' : ''}`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      <aside
        className={`chat-drawer${isOpen ? ' is-open' : ''}`}
        aria-hidden={!isOpen}
        aria-label="College Help Desk chat"
      >
        <div className="chat-drawer__header">
          <div className="chat-drawer__avatar">
            <img src={ASSISTANT_AVATAR} alt="" />
          </div>
          <div>
            <h5>College Help Desk</h5>
            <p>Knowledgeable &amp; Approachable</p>
          </div>
          <button type="button" className="chat-drawer__close" onClick={onClose} aria-label="Close chat">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="chat-drawer__tabs" aria-label="Chat panels">
          <button
            type="button"
            className={`chat-drawer__tab${tab === 'assistant' ? ' is-active' : ''}`}
            onClick={() => setTab('assistant')}
          >
            <span className="material-symbols-outlined">smart_toy</span>
            Assistant
          </button>
          <button
            type="button"
            className={`chat-drawer__tab${tab === 'links' ? ' is-active' : ''}`}
            onClick={() => setTab('links')}
          >
            <span className="material-symbols-outlined">bolt</span>
            Quick Links
          </button>
          <button
            type="button"
            className={`chat-drawer__tab${tab === 'history' ? ' is-active' : ''}`}
            onClick={() => setTab('history')}
          >
            <span className="material-symbols-outlined">history</span>
            History
          </button>
        </nav>

        <div className="chat-drawer__body" ref={bodyRef}>
          {tab === 'assistant' && (
            <>
              {messages.map((message) => (
                <MessageBubble key={message.id} role={message.role} text={message.text} />
              ))}
              {isTyping && <MessageBubble role="assistant" text="Thinking..." loading />}
            </>
          )}

          {tab === 'links' && (
            <div className="chat-drawer__panel">
              {QUICK_LINKS.map((link) => (
                <a key={link.href} href={link.href} onClick={onClose}>
                  {link.label}
                </a>
              ))}
            </div>
          )}

          {tab === 'history' && (
            <div className="chat-drawer__panel">
              {messages
                .filter((m) => m.role === 'user')
                .map((m) => (
                  <button key={m.id} type="button" className="linkish" onClick={() => setTab('assistant')}>
                    {m.text}
                  </button>
                ))}
              {messages.filter((m) => m.role === 'user').length === 0 && (
                <p>No previous questions yet.</p>
              )}
            </div>
          )}
        </div>

        <div className="chat-drawer__footer">
          {tab === 'assistant' ? (
            <ChatInput onSend={handleSend} disabled={isTyping} />
          ) : (
            <button type="button" className="chat-drawer__start" onClick={handleStartNewChat}>
              Start New Chat
            </button>
          )}
        </div>
      </aside>
    </>
  );
}

export default ChatDrawer;
