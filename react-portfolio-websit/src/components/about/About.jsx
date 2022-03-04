import React from "react";
import "./About.css";
import Me from "../../assets/memoji.webp";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="My Photo" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ years Working</small>
            </article>
            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>2+ years Working</small>
            </article> */}
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>10 + Projects</h5>
              <small>adding more..</small>
            </article>
          </div>
          <p>
            I am an enthusiastic web developer with 2+ years of experience in developing web applications from scratch to scalar. 
            I've always been passionate about innovation and the curious one for how things work and can be enhanced. 
            Enjoy working on solutions that can make consumer experience better.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
