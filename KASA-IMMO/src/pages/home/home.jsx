// ASSETS
import imageHome from "../../assets/imagehome.png";
import Card from "../../components/card/card";
//css
import "../../components/banniere/banniere.css";

//fonction qui gère l'affichage de certains éments dans la page d'accueil
function Home() {
  return (
    <section>
      <div className="imagebanniere">
        <img className="imagehome" src={imageHome} alt="image bannière" />
        <p className="texteimagehome">Chez vous, partout et ailleurs</p>
      </div>
      <Card />
    </section>
  );
}

export default Home;
