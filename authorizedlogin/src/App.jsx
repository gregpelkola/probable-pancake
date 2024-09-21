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

  
}