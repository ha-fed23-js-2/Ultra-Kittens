import React, { useState } from "react";
import "../styles/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Kod för att hantera inloggning
    console.log("Användarnamn:", username);
    console.log("Lösenord:", password);
    // Återställ formuläret efter inloggning
    setUsername("");
    setPassword("");
  };

  return (
    <div className="login-container login-hidden">
      <h2>Log in</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="login-label">Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
		<label className="login-label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
		<div className="login-btn-container">
        <button className="login-btn">Log in</button>
		<button className="login-cancel-btn">Cancel</button>
		</div>
      </form>
    </div>
  );
};

export default Login;


// {showLogin && <Login />}