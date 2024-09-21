import React, { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:5000/login", { username, password });
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
            <label>Username:</label>
            <input 
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input 
              type="password"
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