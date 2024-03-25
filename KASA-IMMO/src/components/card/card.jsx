// IMPORTS
import { Link } from "react-router-dom";
import "./card.css";

// ASSETS
import DataLogement from "../../data/logements.json";

// Composant Card qui génére des cards
function Card({ id, cover, title }) {
  return (
    <Link to={`/fichelogement/${id}`} key={id}>
      <figure className="ConteneurCard">
        <img className="ImgLogement" src={cover} alt={title} />
        <div className="ConteneurtitleLogement"></div>
        <figcaption className="TitleLogement">{title}</figcaption>
      </figure>
    </Link>
  );
}
export default Card;
