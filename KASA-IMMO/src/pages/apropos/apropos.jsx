// ASSETS
import imageApropos from "../../assets/imageapropos.png";
//import composants
import Collapse from "../../components/collapse/collapse"; // Assurez-vous d'ajuster le chemin si nécessaire
import collapseData from "../../components/collapse/collapse.json";
//css
import "./apropos.css";

//fonction qui renvoie une section avec plusieurs éléments
function Apropos() {
  console.log(collapseData);
  return (
    <section>
      {/**affichage de la bannière avec sa récupération par sa variable "imageApropos" */}
      <div className="imagebanniereapropos">
        <img
          className="imageapropos"
          src={imageApropos}
          alt="image bannière apropos"
        />
      </div>
      <div>
        {/**Affichage des 4 collapse avec leurs données issus du fichier collapse.json
         * boucle map qui itère sur les éléments du tableau CollapseData(issue du fichier des données collapse.json)
         * pour chaque élément, le composant collapse est rendu avec les props qui correspondent aux propriétés de l'élément :
         * title = titre de l'entrée
         * text = contenu du collapse
         * key = la clé qui permet d'identifier la donné a afficher dans le bon collapse
         */}
        {collapseData.map((item) => (
          <Collapse title={item.title} text={item.text} key={item.id} />
        ))}
      </div>
    </section>
  );
}
export default Apropos;
