import React from "react";
import imageHome from "../../assets/imagehome.png";
import "./banniere.css";
//fonction qui récupère l'image de la bannière de la page home
function Baniere() {
  return (
    <baniere className="conteneurbaniere">
      <div className="imagebanniere">
        {/*récupère l'image de la variable "imageHomme"*/}
        <img src={imageHome} alt="image bannière" />
      </div>
    </baniere>
  );
}
export default Baniere;
