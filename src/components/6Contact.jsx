// components/Contact.jsx
import React from 'react';
import './6Contact.css';
import { Element } from 'react-scroll';

const Contact = () => {
  return (
    <Element name="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>

        <button type="submit">Send</button>
      </form>
    </Element>
  );
};

export default Contact;