import React from "react";
import "./Portfolio.css";
import Img from "../../assets/baby.jpg";

const data = [
  {
    id: 1,
    image: Img,
    title: "This is a portfolio title1",
    github: "https://github.com/mukuljeswani?tab=repositories",
    demo: "https://github.com/mukuljeswani?tab=repositories",
  },
  {
    id: 2,
    image: Img,
    title: "This is a portfolio title2",
    github: "https://github.com/mukuljeswani?tab=repositories",
    demo: "https://github.com/mukuljeswani?tab=repositories",
  },
  {
    id: 3,
    image: Img,
    title: "This is a portfolio title3",
    github: "https://github.com/mukuljeswani?tab=repositories",
    demo: "https://github.com/mukuljeswani?tab=repositories",
  },
  {
    id: 4,
    image: Img,
    title: "This is a portfolio title4",
    github: "https://github.com/mukuljeswani?tab=repositories",
    demo: "https://github.com/mukuljeswani?tab=repositories",
  },
  {
    id: 5,
    image: Img,
    title: "This is a portfolio title5",
    github: "https://github.com/mukuljeswani?tab=repositories",
    demo: "https://github.com/mukuljeswani?tab=repositories",
  },
  {
    id: 6,
    image: Img,
    title: "This is a portfolio title6",
    github: "https://github.com/mukuljeswani?tab=repositories",
    demo: "https://github.com/mukuljeswani?tab=repositories",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
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
