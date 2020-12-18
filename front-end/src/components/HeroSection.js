import React from "react";

import { Button } from "./Buttons";

/**
 * Kotisivulla olevan video osion komponentti.
 *
 * @component
 */

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video.mp4" autoPlay loop muted />
      <h1>GET A RIDE FOR TODAY</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          props="/renting"
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          RENT NOW
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
