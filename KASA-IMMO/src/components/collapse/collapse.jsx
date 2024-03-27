import React, { useState } from "react";
//import css
import "./collapse.css";
//import du fichier créer de la base de données du collapse
import collapseData from "./collapse.json";
import haut from "../../assets/haut.png";
import bas from "../../assets/bas.png";
//méthode map pour la gestion des données(titre/texte défilement)par le statut ouvert/fermé

function Collapse() {
  const [data, setData] = useState(collapseData);
  return (
    <div className="container">
      {data.map((item) => (
        <div key={item.id}>
          <h3 className="h3collapse">{item.title}</h3>
          <button
            className="buttonclick"
            onClick={() => handleCollapseToggle(item.id)}
          >
            {item.state ? (
              <img src={haut} alt="flèche haut" />
            ) : (
              <img src={bas} alt="flèche bas" />
            )}
          </button>
          {item.state && <p>{item.text}</p>}
        </div>
      ))}
    </div>
  );
  //action de l'utilisateur au clic sur le bouton de défilement par l'id du bouton
  function handleCollapseToggle(id) {
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            state: !item.state,
          };
        }
        return item;
      });
    });
  }
}

export default Collapse;
