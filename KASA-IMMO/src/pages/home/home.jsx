// ASSETS
import imageHome from "../../assets/imagehome.png";
import "./home.css";
function Home() {
  return (
    <section>
      <div className="imagebanniere">
        <img className="imagehome" src={imageHome} alt="image bannière" />
        <p className="texteimagehome">Chez vous, partout et ailleurs</p>
      </div>
    </section>
  );
}

export default Home;
