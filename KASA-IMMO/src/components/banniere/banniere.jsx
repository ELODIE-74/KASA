import React from "react";
import imageHome from "../../assets/imagehome.png";
import "./banniere.css";

function Baniere() {
  return (
    <baniere className="conteneurbaniere">
      <div className="imagebanniere">
        <img src={imageHome} alt="image bannière" />
      </div>
    </baniere>
  );
}
export default Baniere;
