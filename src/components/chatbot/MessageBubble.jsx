function MessageBubble({ role, text, loading = false }) {
  const className = [
    'message',
    `message--${role}`,
    loading ? 'message--loading' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={className}>
      <div className="message__bubble">{text}</div>
    </div>
  );
}

export default MessageBubble;
