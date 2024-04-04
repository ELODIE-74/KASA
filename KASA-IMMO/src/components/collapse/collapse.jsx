import React, { useState } from "react";
//import css
import "./collapse.css";
//import du fichier créer de la base de données du collapse
import haut from "../../assets/haut.png";
import bas from "../../assets/bas.png";
//méthode map pour la gestion des données(titre/texte défilement)par le statut ouvert/fermé

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const isArray = text instanceof Array;
  return (
    <div className="container">
      <h3 className="h3collapse">{title}</h3>
      <button className="buttonclick" onClick={() => handleCollapseToggle()}>
        {isOpen ? (
          <img src={bas} alt="flèche bas" />
        ) : (
          <img src={haut} alt="flèche haut" />
        )}
      </button>

      {isOpen &&
        (isArray ? (
          <ul>
            {text.map((equipement) => (
              <li>{equipement}</li>
            ))}
          </ul>
        ) : (
          <p className="backgroundText">{text}</p>
        ))}
    </div>
  );
  //action de l'utilisateur au clic sur le bouton de défilement par l'id du bouton
  function handleCollapseToggle() {
    setIsOpen(!isOpen);
  }
}

export default Collapse;
