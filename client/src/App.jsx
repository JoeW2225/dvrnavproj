import React, { useState } from "react";
import MessageForm from "./components/MessageForm";
import Messages from "./components/Messages";
import "./App.css";

function App() {
  // State for messages
  const [messages, setMessages] = useState([]);

  // Handler for adding a new message
  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div id="root">
      <MessageForm addMessage={addMessage} />
      <div className="output">
        <Messages messages={messages} />
      </div>
      <iframe
        className="giphy-embed"
        src="https://giphy.com/embed/Dh5q0sShxgp13DwrvG"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default App;
