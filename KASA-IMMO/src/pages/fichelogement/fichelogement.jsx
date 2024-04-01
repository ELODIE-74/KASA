import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./fichelogement.css";
// ASSETS
import DataLogement from "../../data/logements.json";

//import composants
import Slide from "../../components/slide/slide";
import Collapse from "../../components/collapse/collapse";

import Rating from "../../components/rating/rating";

//import de la page error en cas de problème d'id
//import "../../pages/error404/error404";

//fonction pour gérer les évènements et éléments de la page logement
function Fichelogement() {
  // Récupérer l'ID du logement à partir de l'URL
  const [logement, setLogement] = useState(null);
  const { id } = useParams(); // Récupère l'id du logement dans l'url

  useEffect(() => {
    const data = DataLogement.find((logement) => logement.id === id);
    if (data) {
      setLogement(data);
    } else {
      setLogement(null);
    }
  }, [id]);

  return (
    <div className="ficheslogement">
      {logement && (
        <>
          <Slide pictures={logement.pictures} />
          <h2>{logement.title}</h2>
          <div>
            <h3>{logement.host.name}</h3>
            <img className="imgcercle" src={logement.host.picture} />
          </div>
          <p>{logement.location}</p>
          <ul>
            {logement.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>

          <div className="collapse-container">
            <Collapse
              className="collapse-contentdescription"
              title="Description"
              text={logement.description}
            />

            {logement.equipments && (
              <Collapse
                className="collapse-content"
                title="Équipements"
                text={logement.equipments.join(", ")}
              />
            )}
          </div>

          {/* Note du logement */}
          {logement.rating && (
            <div>
              <Rating rating={logement.rating} />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Fichelogement;
