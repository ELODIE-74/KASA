import React from "react";
import starImage from "../../assets/star.png";
import starColor from "../../assets/starcolor.png";

import "./rating.css";

function Rating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const star = i <= rating ? starColor : starImage;
    stars.push(<img key={i} className="star" src={star} alt="Star" />);
  }

  return <div className="rating">{stars}</div>;
}

export default Rating;
