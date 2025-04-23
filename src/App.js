import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NewChatForm from './components/NewChatForm';
import ButtonBar from './components/ButtonBar';
import ChatLandingPage from './components/ChatLandingPage';

function App() {
  const [chats, setChats] = useState([
    { id: '1', name: 'Alice', messages: [] },
    { id: '2', name: 'Bob', messages: [] },
    { id: '3', name: 'Charlie', messages: [] },
  ]);

  const addChat = (newChat) => {
    setChats((prevChats) => [...prevChats, newChat]);
  };

  const addMessage = (chatId, message) => {
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === chatId
          ? { ...chat, messages: [...chat.messages, message] }
          : chat
      )
    );
  };

  return (
    <Router>
      <ButtonBar />
      <Routes>
        <Route path="/" element={<Home chats={chats} addMessage={addMessage} />} />
        <Route path="/new" element={<NewChatForm addChat={addChat} />} />
     
      </Routes>
    </Router>
  );
}

export default App;
