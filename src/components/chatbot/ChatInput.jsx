import { useState } from 'react';

function ChatInput({ onSend, disabled = false }) {
  const [value, setValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue('');
  }

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Ask about courses, admissions..."
        aria-label="Chat message"
        disabled={disabled}
      />
      <button
        type="submit"
        className="chat-input__send"
        disabled={disabled || !value.trim()}
        aria-label="Send message"
      >
        <span className="material-symbols-outlined">send</span>
      </button>
    </form>
  );
}

export default ChatInput;
