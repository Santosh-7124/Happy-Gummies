import React from "react";
import BannerBackground from "../../assets/Adults/Banner Background.png";
import BannerButton from "../Buttons/BannerButton";
import Navbar from "../Navbar";

function Banner() {
  return (
    <div className="kids-banner">
      <img src={BannerBackground} className="kids-banner-background" />
      <div className="home-banner-container">
        <div className="heading">
          <h1>ADULTS ADORE IT !!</h1>
          <p>
            Let our gummy bears take you on a joyride bursting with happiness
            and cloud-like softness in every bite
          </p>
        </div>
        <BannerButton toLink="/#footer" text="Order Now" />
      </div>
      <Navbar />
    </div>
  );
}

export default Banner;