// ASSETS
import imageApropos from "../../assets/imageapropos.png";

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
    </section>
  );
}
export default Apropos;
