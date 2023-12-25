import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
// import IMG4 from "../../assets/portfolio4.jpg";
// import IMG5 from "../../assets/portfolio5.png";
import IMG5 from "../../assets/bdu.png";
import IMG6 from "../../assets/coloby.png";
import IMG4 from "../../assets/hiclean.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Hi-Clean - The Best Cleaning Services in Nigeria",
    github: "https://github.com",
    demo: "https://www.hicleanservices.com.ng/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Coloby - Create, Collaborate and Innovate",
    github: "https://github.com",
    demo: "https://colobyapp.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Bit Digital University get digital freedom",
    github: "https://github.com",
    demo: "https://bitdigitaluniversity.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Hi-Clean - The Best Cleaning Services in Nigeria",
    github: "https://github.com",
    demo: "https://www.hicleanservices.com.ng/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Coloby - Create, Collaborate and Innovate",
    github: "https://github.com",
    demo: "https://colobyapp.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Bit Digital University - Get Digital Freedom",
    github: "https://github.com",
    demo: "https://bitdigitaluniversity.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
