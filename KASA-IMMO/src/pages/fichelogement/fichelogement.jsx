// IMPORTS
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./fichelogement.css";
// ASSETS
import DataLogement from "../../data/logements.json";

//import composants
import Slide from "../../components/slide/slide";
//fonction pour gérer les évènements et éléments de la page logement
function Fichelogement() {
  // Récupérer l'ID du logement à partir de l'URL
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
    <div className="ficheslogement">
      {logement && <Slide pictures={logement.pictures} />}
    </div>
  );
}
export default Fichelogement;
