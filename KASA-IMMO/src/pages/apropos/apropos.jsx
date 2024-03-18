// ASSETS
import imageApropos from "../../assets/imageapropos.png";
//import composants
import Collapse from "../../components/collapse/collapse"; // Assurez-vous d'ajuster le chemin si nécessaire

//css
import "./apropos.css";
function Apropos() {
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
        <Collapse />
      </div>
    </section>
  );
}
export default Apropos;
