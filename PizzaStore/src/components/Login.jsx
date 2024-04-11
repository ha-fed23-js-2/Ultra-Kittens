import React, { useState } from "react";
import "../styles/Login.css";
import Joi from "joi";

const Login = ({ onCancel }) => {
  const [username, setUsername] = useState("");
  const [usernameTouched, setUsernameTouched] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    username: "",
    password: ""
  });

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validera användarnamn och lösenord innan inloggning
    validateForm();
    // Återställ formuläret efter inloggning
    setUsername("");
    setPassword("");
  };

  const handleCancelClick = () => {
    onCancel();
  };

  const validateForm = () => {
    const schema = Joi.object({
      username: Joi.string().required().label("Username"),
      password: Joi.string().required().label("Password")
    });

    const { error } = schema.validate({ username, password }, { abortEarly: false });

    if (error) {
      const newErrorMessages = {};
      error.details.forEach((item) => {
        newErrorMessages[item.context.label] = item.message;
      });
      setErrorMessages(newErrorMessages);
    } else {
      setErrorMessages({ username: "", password: "" });
    }
  };

  const getUsernameErrorMessage = () => {
    if (!username && usernameTouched) {
      return "Username is required";
    }
    return errorMessages.username;
  };

  const getPasswordErrorMessage = () => {
    if (!password && passwordTouched) {
      return "Password is required";
    }
    return errorMessages.password;
  };

  return (
    <div className="login-container login-visible">
      <h2>Log in</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="login-label">Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            onBlur={() => setUsernameTouched(true)}
            required
			placeholder="Your username"
          />
          <p className={"login-error-message " + (getUsernameErrorMessage() ? 'visible' : 'invisible')}>
            {getUsernameErrorMessage() || "\u00A0"} 
          </p>
        </div>
        <div className="form-group">
          <label className="login-label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={() => setPasswordTouched(true)}
            required
			placeholder="Your password"
          />
          <p className={"login-error-message " + (getPasswordErrorMessage() ? 'visible' : 'invisible')}>
            {getPasswordErrorMessage() || "\u00A0"} 
          </p>
        </div>
        <div className="login-btn-container">
          <button className="login-btn">Log in</button>
          <button className="login-cancel-btn" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;