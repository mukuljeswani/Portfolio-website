import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_au937aq",
      "template_m914xbp",
      form.current,
      "DYAOjBU659Dr1Kc7L"
    )

    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mukuljeswani@gmail.com</h5>
            <a href="mailto:mukuljeswani@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Mukul Jeswani</h5>
            <a href="https://m.me/mukul.jeswani.1/" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FiTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>jeswani_mukul</h5>
            <a href="https://twitter.com/jeswani_mukul" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
