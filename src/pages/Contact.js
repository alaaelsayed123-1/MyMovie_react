import React, { useState } from 'react';
import '../styles/Contact.css';
import contactImage from '../assets/movielogo.jpg'; // ضع movielogo.jpg هنا

const Contact = () => {
  const [state, setState] = useState({ fname: '', email: '', message: '' });

  const handleChange = (e) => setState({ ...state, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(state));
    setState({ fname: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${contactImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            name="fname"
            placeholder="Full Name"
            value={state.fname}
            onChange={handleChange}
            required
          />
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
            required
          />
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Message"
            value={state.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
