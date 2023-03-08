import React from "react";
import featuredImg from "../assets/images/featured_img.png";
function About() {
  return (
    <div className="about">
      <img
        className="featured__image"
        src={featuredImg}
        alt="a van sitting on the roof of his vehicle whilst looking at the night sky"
      />
      <div className="about__container">
        <h3 className="about__subtitle">
          Don't squeeze in a sedan when you could relax in a van.
        </h3>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="cta__container">
          <p className="cta__description">Your destination is waiting.</p>
          <p className="cta__description margin--btm">Your van is ready.</p>
          <button className="btn cta__about__btn">Explore your vans</button>
        </div>
      </div>
    </div>
  );
}

export default About;
