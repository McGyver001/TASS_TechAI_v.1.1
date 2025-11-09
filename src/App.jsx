import React, { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, from: 'user' }]);
    setInput('');
    setTimeout(() => {
      setMessages(m => [...m, { text: 'AI: This is a smart assistant reply.', from: 'ai' }]);
    }, 600);
  };

  return (
    <div className="app-container">
      <header>
        <h2>Kunes | TASS TechAI</h2>
      </header>

      <nav className="tabs">
        {['dashboard', 'resources', 'diagnostics', 'chat', 'admin'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={activeTab === tab ? 'active' : ''}>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      <main>
        {activeTab === 'dashboard' && <p>Welcome to your efficiency dashboard.</p>}
        {activeTab === 'resources' && (
          <ul>
            <li><a href="https://www.fmcdealer.dealerconnection.com/" target="_blank">Ford Login</a></li>
            <li><a href="https://www.motorcraftservice.com" target="_blank">Ford Service Manual</a></li>
            <li><a href="https://my.alldata.com/" target="_blank">Alldata Login</a></li>
            <li><a href="https://app.fordpdl.com/12/login" target="_blank">Ford PDL Portal</a></li>
          </ul>
        )}
        {activeTab === 'diagnostics' && <p>Access diagnostic tools and repair data here.</p>}
        {activeTab === 'chat' && (
          <div className="chat-box">
            <div className="messages">
              {messages.map((msg, i) => (
                <div key={i} className={msg.from}>{msg.text}</div>
              ))}
            </div>
            <div className="input-area">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type your message..."
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          </div>
        )}
        {activeTab === 'admin' && <p>Admin tools and configuration area.</p>}
      </main>
    </div>
  );
};

export default App;
