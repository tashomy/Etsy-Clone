import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-item">
        <h2 className="about-title" id="main-about-title">
          What is Etsy?
        </h2>
        <Link className="about-link">Read our wonderfully weird story</Link>
      </div>
      <div className="about-item-h">
        <div className="about-sub">
          <h3 className="about-title">A community doing good</h3>
          <p>
            Etsy is a global online marketplace, where people come together to
            make, sell, buy and collect unique items. We’re also a community
            pushing for positive change for small businesses, people, and the
            planet. Here are some of the ways we’re making a positive impact,
            together.
          </p>
        </div>
        <div className="about-sub">
          <h3 className="about-title">Support independent creators</h3>
          <p>
            There’s no Etsy warehouse – just millions of people selling the
            things they love. We make the whole process easy, helping you
            connect directly with makers to find something extraordinary.
          </p>
        </div>
        <div className="about-sub">
          <h3 className="about-title">Peace of mind</h3>
          <p>
            Your privacy is the highest priority of our dedicated team. And if
            you ever need assistance, we are always ready to step in for
            support.
          </p>
        </div>
      </div>
      <div className="about-item">
        <p className="bold"> Have a question? Well, we’ve got some answers. </p>
        <Link className="btn btn-secondary">Go to Help Center</Link>
      </div>
    </div>
  );
};

export default About;
