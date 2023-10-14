import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer </h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX DESIGN</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Craft visually appealing and intuitive user interfaces that
                enhance user experience.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Create seamless and user-centric experiences through research,
                wireframing, and prototyping.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Conduct in-depth user research to gain insights into user
                behavior and preferences, informing design decisions that
                enhance usability and user satisfaction.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Ensure your web applications and websites adapt flawlessly to
                various devices and screen sizes.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Build dynamic and interactive user interfaces using cutting-edge
                technologies such as HTML, CSS, and JavaScript.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Seamlessly combine front-end and back-end development expertise
                to create comprehensive web solutions.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Develop robust server-side applications and databases to power
                your web projects.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Create feature-rich online stores with secure payment gateways,
                shopping cart functionality, and inventory management,
                optimizing businesses for online sales.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Build tailor-made web applications that address specific
                business needs, integrating advanced functionalities, APIs, and
                databases for efficient and scalable solutions.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>CONTENT CREATION</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Generate engaging and SEO-optimized content for websites, blogs,
                and marketing materials.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Design eye-catching visuals, including infographics,
                illustrations, and marketing materials.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Produce compelling video content, from scripting and shooting to
                editing and post-production.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Curate and manage social media content across platforms to build
                brand awareness, engage audiences, and drive traffic and
                conversions through strategic campaigns.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION*/}
      </div>
    </section>
  );
};

export default Services;
