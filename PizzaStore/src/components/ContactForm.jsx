import React from "react";
import "../styles/contactform.css";
import { useState } from "react";
import Joi from "joi";

function ContactForm() {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [message, setMessage] = useState("");
  

  const nameIsValid = name.length > 0;
  const nameErrorMessage = nameIsValid ? "" : "Please enter your name";

  const emailSchema = Joi.string().email({ tlds: false });
  const emailResult = emailSchema.validate(email);
  const emailIsValid = !emailResult.error;
  const emailErrorMessage = emailIsValid
    ? ""
    : "Please enter a valid email adress ";

  const formIsValid = nameIsValid && emailIsValid;


  let nameErrorClass = "error ",
    nameClass = "";
  if (!nameTouched) {
    nameErrorClass += "invisible";
  } else {
    nameErrorClass += nameIsValid ? "invisible" : "invalid";
    nameClass += nameIsValid ? "valid" : "invalid";
  }
  let emailErrorClass = "error ",
    emailClass = "";
  if (!emailTouched) {
    emailErrorClass += "invisible";
  } else {
    emailErrorClass += emailIsValid ? "invisible" : "invalid";
    emailClass += emailIsValid ? "valid" : "invalid";
  }

  const handleSubmit = () => {
    const formData = {
        name,  
        email,
        message
    }
    console.log('Data from form: ', formData)
   
}

  return (
    <div className="form">
      <section className="form-item">
        <label className="form-label">Name*</label>
        <div className={"input-container " + nameClass}>
          <input
            className={nameClass}
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            onBlur={() => setNameTouched(true)}
            placeholder="Type your name"
            required
          />
        </div>
        <p className={nameErrorClass}>{nameErrorMessage} &nbsp; </p>
      </section>

      <section className="form-item">
        <label className="form-label">Email*</label>
        <div className={"input-container " + emailClass}>
          <input
            className={emailClass}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onBlur={() => setEmailTouched(true)}
            placeholder="email@email.com"
            required
          />
        </div>
        <p className={emailErrorClass}> {emailErrorMessage} &nbsp; </p>
      </section>

      <section className="form-item">
        <label className="form-label">Message</label>
        <div className="input-container">
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          type="text"
          placeholder="Write your message here"
        />
        </div>
      </section>

      <section className="form-btn">
        <button
          className="submit-btn"
          disabled={!formIsValid}
          onClick={handleSubmit}
        >
          Send
        </button>
      </section>
    </div>
  );
}

export default ContactForm;
