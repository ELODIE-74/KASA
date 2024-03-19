// IMPORTS
import React, { useState, useEffect } from "react";
import "./fichelogement.css";
// ASSETS
import DataLocation from "../../data/logements.json";
import imageLogement from "../../assets/imagefichelogement.png";
//import composants
import Collapse from "../../components/collapse/collapse"; // Assurez-vous d'ajuster le chemin si nécessaire
function Fichelogement() {
  return (
    <section>
      <div className="imagebannierelogement">
        <img
          className="imagefichelogement"
          src={imageLogement}
          alt="image bannière logement"
        />
      </div>
    </section>
  );
}
export default Fichelogement;
