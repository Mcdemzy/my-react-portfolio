import React from "react";
import "./about.css";
import ME from "../../assets/profile2.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Clients</h5>
              <small>5+ Worldwide</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
          </div>
          <p>
            I am a passionate Computer Science student and dedicated Full Stack
            Web Developer, I'm on an exhilarating journey where technology and
            creativity intertwine harmoniously. My path in the tech world has
            been defined by a steadfast commitment to excellence and a
            deep-rooted dedication to innovation.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
