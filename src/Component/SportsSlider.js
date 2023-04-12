import React, { useState } from "react";
import "./sportsSlider.css";

const SportsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? 4 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === 4 ? 0 : currentSlide + 1);
  };

  return (
    <div className="slider-container">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentSlide * 20}%)` }}
      >
        <img src="Images/cricket.jpg" alt="Cricket" className="slide" />
        <img src="Images/football.jpg" alt="Football" className="slide" />
        <img src="Images/badminton.jpg" alt="Badminton" className="slide" />
        <img src="Images/hockey.jpg" alt="Hockey" className="slide" />
        <img src="Images/basketball.jpg" alt="Basketball" className="slide" />
      </div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default SportsSlider;
