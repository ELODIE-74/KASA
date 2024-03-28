import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./fichelogement.css";
// ASSETS
import DataLogement from "../../data/logements.json";

//import composants
import Slide from "../../components/slide/slide";
//import Collapse from "../../components/collapse/collapse";

import Rating from "../../components/rating/rating";

//import de la page error en cas de problème d'id
import "../../pages/error404/error404";

//fonction pour gérer les évènements et éléments de la page logement
function Fichelogement() {
  // Récupérer l'ID du logement à partir de l'URL
  const [logement, setLogement] = useState(null);
  const { id } = useParams(); // Récupère l'id du logement dans l'url
  const [isInvalidPropertyId, setIsInvalidPropertyId] = useState(false); //validité ou non de l'id de proprité

  useEffect(() => {
    const data = DataLogement.find((logement) => logement.id === id);
    if (data) {
      setLogement(data);
      setIsInvalidPropertyId(false);
    } else {
      setLogement(null);
      setIsInvalidPropertyId(true);
    }
  }, [id]);

  if (isInvalidPropertyId) {
    return <Redirect to="/error404" />;
  }

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
          {/* Description (mise en commentaire)
          <Collapse title="Description">
            <p>{logement.description}</p>
          </Collapse>
          */}
          {/*logement.equipements && (
            <Collapse title="Équipements">
              <ul>
                {logement.equipements.map((equipement, index) => (
                  <li key={index}>{equipement}</li>
                ))}
              </ul>
            </Collapse>
                )*/}
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
