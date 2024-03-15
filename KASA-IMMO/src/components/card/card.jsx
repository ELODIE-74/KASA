// IMPORTS
import { Link } from "react-router-dom";
import "./card.css";

// ASSETS
import DataLocation from "../../data/logements.json";

// Composant Card qui génére des cards
function Card() {
  return (
    <section className="ConteneurLogement">
      {DataLocation.map((logements) => (
        <Link to={`/logements/${logements.id}`} key={logements.id}>
          <figure className="ConteneurCard">
            <img
              className="ImgLogement"
              src={logements.cover}
              alt={logements.title}
            />
            <div className="ConteneurtitleLogement"></div>
            <figcaption className="TitleLogement">{logements.title}</figcaption>
          </figure>
        </Link>
      ))}
    </section>
  );
}
export default Card;
