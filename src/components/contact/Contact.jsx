import React, { useState, useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v8tcnqi",
        "template_czu9ceo",
        form.current,
        "Bv1hcOwU8VLedk5Xt"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true); // Set the state to true when the message is sent
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>adeyemoademola12@gmail.com</h5>
            <a href="mailto:adeyemoademola12@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Ademola Adeyemo</h5>
            <a
              href="https://www.linkedin.com/in/ademola-adeyemo"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+234 913 5451 448</h5>
            <a
              href="https://api.whatsapp.com/send?phone=2349135451448"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
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
            Send Message
          </button>
        </form>

        {/* Display popup when message is sent */}
        {messageSent && (
          <div className="popup">
            <p>Message Sent!</p>
            <button onClick={() => setMessageSent(false)}>Close</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
