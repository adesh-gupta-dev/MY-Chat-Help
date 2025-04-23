import React, { useState } from 'react';
import { Send , Eraser } from 'lucide-react';
import './ChatLandingPage.css';
import Footer from './footer'; // Import the Footer component

const ChatLandingPage = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  // Handle message submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'You', text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await fetch('http://localhost:5000/api/openai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: input }],
        }),
      });

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const data = await res.json();
      const aiMessage = { sender: 'AI', text: data.content || 'No reply received' };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error calling the backend:', error);
      const errorMessage = { sender: 'AI', text: 'Error receiving response' };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setInput('');
  };

  // Clear all messages
  const handleClear = () => {
    setMessages([]);
  };

  return (
    <div className="chat-landing">
      <header className="chat-header">
        <h1>What can I help with?</h1>
        
        <button className="clear-button" onClick={handleClear}><Eraser /></button>
      </header>

      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.sender === 'You' ? 'user' : 'ai'}`}>
            <strong>{msg.sender}: </strong>{msg.text}
          </div>
        ))}
      </div>

      <form className="chat-input-box" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ask anything"
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="chat-send-button" type="submit">
          <Send size={20} color="#000" />
        </button>
      </form>


      <Footer />
    
    </div>
    
    
  );
};

export default ChatLandingPage;
