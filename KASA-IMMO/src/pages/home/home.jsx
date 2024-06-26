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
      {/**affichage de la bannière */}
      <div className="imagebanniere">
        <img className="imagehome" src={imageHome} alt="image bannière" />
        <p className="texteimagehome">Chez vous, partout et ailleurs</p>
      </div>
      <div className="ConteneurLogement">
        {/**boucle map qui itère sur les éléments du tableau Datalogement (fichier logements.Json),affiche une carte de logement pour chaque élément
         * récupére l'id = identifiant
         * récupère le cover = image du logement dans la card
         * récupère le titre = de quel logement il s'agit
         */}
        {DataLogement.map((logement) => (
          <div key={logement.id}>
            <Card
              id={logement.id}
              cover={logement.cover}
              title={logement.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
