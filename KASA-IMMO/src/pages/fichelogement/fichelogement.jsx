// IMPORTS
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./fichelogement.css";
// ASSETS
import DataLogement from "../../data/logements.json";
import imageLogement from "../../assets/imagefichelogement.png";
//import composants
import Collapse from "../../components/collapse/collapse"; // Assurez-vous d'ajuster le chemin si nécessaire

//fonction pour gérer les évènements et éléments de la page logement
function Fichelogement() {
  const [logement, setLogement] = useState(null);
  const { id } = useParams(); // Récupère l'id du logement dans l'url

  useEffect(() => {
    // Récupère les infos du logement en fonction de l'id
    const data = DataLogement.find((logement) => logement.id === id);
    if (data) {
      setLogement(data);
    } else {
      setLogement(null);
    }
  }, [id]);

  if (!logement) {
    // Si l'id n'existe pas, affiche la page d'erreur
    return <Error />;
  }
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
