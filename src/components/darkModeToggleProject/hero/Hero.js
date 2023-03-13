import React from "react";
import "./Hero.css";
import heroImg from "./../assets/phone.svg";

const Hero = ({ myTheme, onToggleTheme }) => {
  return (
    <section className="hero" data-theme={myTheme}>
      <div className="container --grid-15">
        <div className="hero-text">
          <h2>Visit Vila Shop Landing Page</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
          <div className="--flex-start">
            <button className="--btn btn-p">Learn More</button>
            <button className="--btn --btn-danger">Sign Up</button>
          </div>
        </div>
        <div className=" --text-center">
          <img src={heroImg} alt="" width={200} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
