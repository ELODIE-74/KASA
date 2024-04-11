import React, { useState } from "react";
import "./slide.css";
import leftArrow from "../../assets/arrowleft.png";
import rightArrow from "../../assets/arrowright.png";

//fonction pour gérer l'affichage des données du logement correspondant
function Slide({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  //gérer la slide + retour en arrière
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? pictures.length - 1 : prevSlide - 1
    );
  };

  //gérer la slide + bond en avant, affiche la slide d'après(+1)
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === pictures.length - 1 ? 0 : prevSlide + 1
    );
  };

  //retour au clic sur la flèche gauche de l'image + image d'avant
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
      {/**retour au clic sur la flèche droite + image d'après */}
      {pictures.length > 1 && (
        <img
          className="arrow arrowright"
          src={rightArrow}
          alt="Right Arrow"
          onClick={handleNextSlide}
        />
      )}
      {/**pagination chiffre vue actuelle / le nombre d'image du logement */}
      {pictures.length > 1 && (
        <div className="pagination">
          <div className="pagination-text">
            {`${currentSlide + 1}/${pictures.length}`}
          </div>
          <div className="chiffres">
            {/**méthode map pour parcourir le tableau d'images(pictures) et rendre une div pour chaque élément */}
            {pictures.map((index) => (
              <div
                key={index}
                className={`chiffre ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Slide;
