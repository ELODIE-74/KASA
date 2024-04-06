import React from "react";
import starImage from "../../assets/star.png";
import starColor from "../../assets/starcolor.png";

import "./rating.css";
//fonction pour attribuer une note de 1 à 5 suivant la notation du fichier JSON
function Rating({ rating }) {
  const stars = [];
  {
    /**la coloration de l'étoile(note) est déterminé en fonction de i */
  }
  for (let i = 1; i <= 5; i++) {
    const star = i <= rating ? starColor : starImage;
    stars.push(<img key={i} className="star" src={star} alt="Star" />);
  }

  return <div className="rating">{stars}</div>;
}

export default Rating;
