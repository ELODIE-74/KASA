import React, { useState } from "react";
import "./slide.css";
import leftArrow from "../../assets/arrowleft.png";
import rightArrow from "../../assets/arrowright.png";

function Slide({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? pictures.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === pictures.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="slideshow">
      {pictures.length > 1 && (
        <img
          className="arrow arrowleft"
          src={leftArrow}
          alt="Left Arrow"
          onClick={handlePrevSlide}
        />
      )}

      <img
        className="slide"
        src={pictures[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
      />

      {pictures.length > 1 && (
        <img
          className="arrow arrowright"
          src={rightArrow}
          alt="Right Arrow"
          onClick={handleNextSlide}
        />
      )}

      {pictures.length > 1 && (
        <div className="pagination">
          {pictures.map((index) => (
            <div
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Slide;
