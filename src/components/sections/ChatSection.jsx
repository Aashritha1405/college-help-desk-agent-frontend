import { useState } from 'react';
import ChatDrawer from '../chatbot/ChatDrawer.jsx';

function ChatSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section aria-label="Help desk chat">
      <div className="chat-fab">
        {!isOpen && <div className="chat-fab__tip">Ask me anything!</div>}
        <button
          type="button"
          className="chat-fab__btn"
          aria-label={isOpen ? 'Close help desk chat' : 'Open help desk chat'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="material-symbols-outlined filled">
            {isOpen ? 'close' : 'smart_toy'}
          </span>
        </button>
      </div>

      <ChatDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}

export default ChatSection;
