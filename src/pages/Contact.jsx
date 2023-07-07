import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can send the form data to a server or perform any required actions
    console.log("Form submitted:", name, email, message);
    // Reset form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
