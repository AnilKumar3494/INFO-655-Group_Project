import React from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import "./services.css";

const Services = () => {
  return (
    <div>
      <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className='services__container'>
          <article className="service">
            <div className="service__head">
              <h3>UI/UX Design</h3>
            </div>
            <ul className="service__list">
              <li>
                <ArrowRightIcon className="service__list-icon"/>
                <p>WireFraming</p>
              </li>
              <li>
                <ArrowRightIcon className="service__list-icon"/>
                <p>Prototyping</p>
              </li>
              <li>
                <ArrowRightIcon className="service__list-icon"/>
                <p>Usability Testing</p>
              </li>
              <li>
                <ArrowRightIcon className="service__list-icon"/>
                <p>Visual Design</p>
              </li>
            </ul>
          </article>
          <article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>
            <ul className="service__list">
            <li>
              <ArrowRightIcon className="service__list-icon"/>
              <p>Frontend Development</p>
            </li>
            <li>
              <ArrowRightIcon className="service__list-icon"/>
              <p>Backend Development</p>
            </li>
            <li>
              <ArrowRightIcon className="service__list-icon"/>
              <p>Database Management</p>
            </li>
            <li>
              <ArrowRightIcon className="service__list-icon"/>
              <p>Server Management</p>
            </li>
            <li>
              <ArrowRightIcon className="service__list-icon"/>
              <p>API Development</p>
            </li>
            </ul>
          </article>
          <article className="service">
            <div className="service__head">
              <h3>Content Management</h3>
            </div>
            <ul className="service__list">
            <li>
              <ArrowRightIcon className="service__list-icon"/>
              <p>Content Writing</p>
            </li>
            <li>
              <ArrowRightIcon className="service__list-icon"/>
              <p>Content Editing</p>
            </li>
            <li>
              <ArrowRightIcon className="service__list-icon"/>
              <p>Information Architechure</p>
            </li>
            <li>
              <ArrowRightIcon className="service__list-icon"/>
              <p>Content Strategy</p>
            </li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Services;
