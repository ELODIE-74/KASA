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
  {
    /**si ne trouve pas l'id du logement, si il est null
     *redirection vers la page d'error404
     *sinon la page affiche les détails du logement*/
  }
  if (!logement) {
    return <Error404 />;
  }

  return (
    <div className="ficheslogement">
      {logement && (
        <>
          {/**utilisation du composant Slide pour le rendu des images dans le carrousel */}
          <Slide pictures={logement.pictures} />
          <div className="title-container">
            <div className="title-info">
              {/**le titre du logement est affiché */}
              <h2 id="colortitle">{logement.title}</h2>
              {/**la localisation du logement est affiché */}
              <p id="location">{logement.location}</p>
            </div>
            <div className="host-info">
              {/**les informations de l'hôte sont affiché :
               * le nom (hoste.name)
               * l'image dans le cercle (host.picture)
               */}
              <h3 id="colortitlehost">{logement.host.name}</h3>
              <img className="imgcercle" src={logement.host.picture} />
            </div>
          </div>

          <div className="tags-ratings-container">
            {/**les tags(mots-clés) du logement sont affiché sous forme de liste*/}
            <ul className="tags">
              {logement.tags.map((tag, index) => (
                <li id="tag" key={index}>
                  {tag}
                </li>
              ))}
            </ul>
            {/**si le logement à une note(rating), on utilise le composant Rating pour afficher la note */}
            {logement.rating && (
              <div className="rating">
                <Rating rating={logement.rating} />
              </div>
            )}
          </div>
          {/**on utilise le composant collapse pour afficher deux collapses de données :
           * un collapse "Description" qui affiche les rensignements du logement
           * un collapse "équipements" qui affiche sous forme de liste, ce qui est a disposition de l'utilisateur
           */}
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
