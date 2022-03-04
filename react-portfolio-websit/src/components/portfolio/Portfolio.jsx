import React from "react";
import "./Portfolio.css";
import BTC from "../../assets/blockchain.jpg";
import Bookzey from "../../assets/bookzey.png";
import LC from "../../assets/leetcode.png";
import bus from "../../assets/bus.jpg"

const data = [
  {
    id: 1,
    image: Bookzey,
    title: "Bookzey",
    github: "",
    demo: "https://bookzey.com/",
  },
  {
    id: 4,
    image: LC,
    title: "Leetcode Questions",
    github: "https://github.com/mukuljeswani/Leetcode-Questions",
    demo: "",
  },
  {
    id: 2,
    image: BTC,
    title: "Decentralized Crowdfunding System",
    github: "",
    demo: "",
  },
  {
    id: 3,
    image: bus,
    title: "Smart Bus management System",
    github: "",
    demo: "",
  }
  // {
  //   id: 5,
  //   image: Img,
  //   title: "This is a portfolio title5",
  //   github: "https://github.com/mukuljeswani?tab=repositories",
  //   demo: "https://github.com/mukuljeswani?tab=repositories",
  // },
  // {
  //   id: 6,
  //   image: Img,
  //   title: "This is a portfolio title6",
  //   github: "https://github.com/mukuljeswani?tab=repositories",
  //   demo: "https://github.com/mukuljeswani?tab=repositories",
  // },
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
                {github.length > 1 ? <a href={github} className="btn" target="_blank">
                  Github
                </a> : null}
                {demo.length > 1 ? <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a> : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
