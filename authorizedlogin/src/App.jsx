// frontend/src/App.jsx
import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", { username, password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Login failed');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleLogin}>
          <div>
            <input 
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <input 
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;