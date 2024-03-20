// ASSETS
import imageHome from "../../assets/imagehome.png";
import Card from "../../components/card/card";
//css
import "../../components/banniere/banniere.css";
import DataLogement from "../../data/logements.json";

//fonction qui gère l'affichage de certains éments dans la page d'accueil
function Home() {
  return (
    <section>
      <div className="imagebanniere">
        <img className="imagehome" src={imageHome} alt="image bannière" />
        <p className="texteimagehome">Chez vous, partout et ailleurs</p>
      </div>
      <div className="ConteneurLogement">
        {DataLogement.map((logement) => (
          <Card
            id={logement.id}
            cover={logement.cover}
            title={logement.title}
            key={logement.id}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;
