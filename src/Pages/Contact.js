import { useState } from "react";
import React from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0935jim",
        "template_795blbi",
        e.target,
        "user_8L5c4LFE9HWH4sCJlabRv"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    alert("Email send Sucessfully! Thank you!");
  };

  return (
    <div className="contactContainer">
      <form onSubmit={handleSubmit} className="contactForm">
        <div className="formContents">
          <h2 className="insideHeader">CONTACT ME</h2>
          <span className="insideComment">
            I will answer you ASAP! Thanks for your interesting! really
            appriciated!
          </span>
          <div className="inputContainer">
            <h2>NAME</h2>
            <input
              className="input1"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <h2>YOUR EMAIL</h2>
            <input
              className="input2"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h2>MESSAGE</h2>
            <textarea
              className="messageArea"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <input className="input3" type="submit" value="SEND" />
          </div>
        </div>
      </form>
    </div>
  );
}
