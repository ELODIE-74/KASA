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
import "../../pages/error404/error404";
import Error404 from "../../pages/error404/error404";

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
  if (!logement) {
    // Si l'id de la card n'exite pas, redirection sur la page d'erreur
    return <Error404 />;
  }

  return (
    //affichage du slide, des ratings, du host (name+pictures(imgcercle), location et title de la page fichelogement suivant l'id de la card)
    <div className="ficheslogement">
      {logement && (
        <>
          <Slide pictures={logement.pictures} />
          <h2>{logement.title}</h2>
          <div>
            <h3 id="colortitleh3">{logement.host.name}</h3>
            <img className="imgcercle" src={logement.host.picture} />
          </div>
          <p>{logement.location}</p>
          <ul>
            {logement.tags.map((tag, index) => (
              <li id="tag" key={index}>
                {tag}
              </li>
            ))}
          </ul>

          <div className="collapse-container">
            <div className="collapse-coD">
              <Collapse title="Description" text={logement.description} />
            </div>
            <div className="collapse-coE">
              {logement.equipments && (
                <Collapse title="Équipements" text={logement.equipments} />
              )}
            </div>
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
