import React, { useState } from "react";
import Joi from "joi";
import { useAuthStore } from "../Data/store";
import "../styles/Login.css";
import {useNavigate} from "react-router-dom"
import UserApi from "../Data/api";


const Login = ({ onCancel, onLoginClick }) => {
  const [username, setUsername] = useState("");
  const [usernameTouched, setUsernameTouched] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate()

  const login = useAuthStore(state => state.login)


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
     if ( login(username, password) ) {
      resetForm()
      navigate('/menu')
      handleLoginBtnClick()
      UserApi.updateLoginStatus('Logged in');
     } else {
      setErrorMessages({
        password: "Wrong username or password"
      })
     }
    } else {
      // valideringen fixar felmeddelande
    }
  };

  const handleCancelClick = () => {
    onCancel();
  };

  const handleLoginBtnClick = () => {
    onLoginClick()
  }

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
      return false
    } else {
      setErrorMessages({ username: "", password: "" });
      return true
    }
  };

  const resetForm = () => {
    setUsername("");
    setPassword("");
  };

  const getUsernameErrorMessage = () => {
    return usernameTouched && !username ? "Username is required" : errorMessages.username;
  };

  const getPasswordErrorMessage = () => {
    return passwordTouched && !password ? "Password is required" : errorMessages.password;
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