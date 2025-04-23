import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewChatForm.css';

const NewChatForm = ({ addChat }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newChat = {
      id: Date.now().toString(),
      name,
      messages: [{ sender: 'You', text: message }],
    };
    addChat(newChat);
    navigate('/'); // navigate back to home after new chat creation
  };

  return (
    <div className="new-chat">
      <h2>Start a New Chat</h2>
      <form onSubmit={handleSubmit} className="new-chat-form">
        <label>Name:</label>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email:</label>
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Message:</label>
        <textarea 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Start Chat</button>
      </form>
    </div>
  );
};

export default NewChatForm;
