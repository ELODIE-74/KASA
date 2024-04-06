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
  const [logement, setLogement] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const data = DataLogement.find((logement) => logement.id === id);
    if (data) {
      setLogement(data);
    } else {
      setLogement(null);
    }
  }, [id]);

  if (!logement) {
    return <Error404 />;
  }

  return (
    <div className="ficheslogement">
      {logement && (
        <>
          <Slide pictures={logement.pictures} />
          <div className="title-container">
            <div className="title-info">
              <h2 id="colortitle">{logement.title}</h2>
              <p id="location">{logement.location}</p>
            </div>
            <div className="host-info">
              <h3 id="colortitlehost">{logement.host.name}</h3>
              <img className="imgcercle" src={logement.host.picture} />
            </div>
          </div>

          <div className="tags-ratings-container">
            <ul className="tags">
              {logement.tags.map((tag, index) => (
                <li id="tag" key={index}>
                  {tag}
                </li>
              ))}
            </ul>
            {logement.rating && (
              <div className="rating">
                <Rating rating={logement.rating} />
              </div>
            )}
          </div>

          <div className="collapse-container">
            <div className="collapse-coD" id="collapse-coD">
              <Collapse title="Description" text={logement.description} />
            </div>
            <div className="collapse-coE" id="collapse-coE">
              {logement.equipments && (
                <Collapse title="Équipements" text={logement.equipments} />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Fichelogement;
