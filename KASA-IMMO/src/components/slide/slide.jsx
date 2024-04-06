import React, { useState } from "react";
import "./slide.css";
import leftArrow from "../../assets/arrowleft.png";
import rightArrow from "../../assets/arrowright.png";

//fonction pour gérer l'affichage des images du logement
function Slide({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeDot, setActiveDot] = useState(0);

  //gérer la slide + la dot passé + retour arrière
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? pictures.length - 1 : prevSlide - 1
    );
    setActiveDot((prevDot) =>
      prevDot === 0 ? pictures.length - 1 : prevDot - 1
    );
  };

  //gére la slide + la dot pour aller à celle d'après +1
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === pictures.length - 1 ? 0 : prevSlide + 1
    );
    setActiveDot((prevDot) =>
      prevDot === pictures.length - 1 ? 0 : prevDot + 1
    );
  };

  //return au clic sur la flèche gauche l'image et la dot d'avant
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
      {/**chaque dot représente une image dans le carrousel, l'index de chaque image est utilisé pour déterminer si le dot est actif ou non */}
      {pictures.length > 1 && (
        <div className="pagination">
          {pictures.map((picture, index) => (
            <div
              key={index}
              className={`dot ${index === activeDot ? "active" : ""}`}
              onClick={() => {
                setCurrentSlide(index);
                setActiveDot(index);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Slide;
