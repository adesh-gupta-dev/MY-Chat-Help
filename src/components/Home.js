import React, { useState } from 'react';
import ChatLandingPage from './ChatLandingPage'; // Assuming you have a ChatScreen component
// This component will display the chat list and the active chat screen
import './Home.css';


const Home = ({ chats, addMessage }) => {
  const [activeChatId, setActiveChatId] = useState(chats.length > 0 ? chats[0].id : null);

  const activeChat = chats.find((chat) => chat.id === activeChatId);

  return (
    <div className="chat-container">
      {activeChat ? (
  <ChatLandingPage chat={activeChat} />

) : (
  <div className="chat-screen">No chat selected</div>
)}

    </div>
  );
};

export default Home;
