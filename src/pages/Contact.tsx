import React from 'react';
import { useAppSelector } from '../redux/hooks';
import './Contact.css';

const Contact: React.FC = () => {
  const theme = useAppSelector((state) => state.theme.currentTheme);

  return (
    <main className={`contact-page ${theme}`}>
      <h2 className="page-title">Contact Us</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={5} required />
        <button type="submit">Send Message</button>
      </form>
    </main>
  );
};

export default Contact;
