import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        MCDEMZY
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/ademola-adeyemo" target="_blank">
          <BsLinkedin />
        </a>
        <a href="tel:09135451448" target="_blank">
          <IoCallOutline />
        </a>
        <a href="https://twitter.com/Mc__Demzy" target="_blank">
          <RiTwitterXFill />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; MCDEMZY. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
