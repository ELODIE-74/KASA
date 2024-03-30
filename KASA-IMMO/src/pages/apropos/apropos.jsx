// ASSETS
import imageApropos from "../../assets/imageapropos.png";
//import composants
import Collapse from "../../components/collapse/collapse"; // Assurez-vous d'ajuster le chemin si nécessaire
import collapseData from "../../components/collapse/collapse.json";
//css
import "./apropos.css";
function Apropos() {
  console.log(collapseData);
  return (
    <section>
      <div className="imagebanniereapropos">
        <img
          className="imageapropos"
          src={imageApropos}
          alt="image bannière apropos"
        />
      </div>
      <div>
        {collapseData.map((item) => (
          <Collapse title={item.title} text={item.text} key={item.id} />
        ))}
      </div>
    </section>
  );
}
export default Apropos;
