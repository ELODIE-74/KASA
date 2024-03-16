import imageLogement from "../../assets/imagefichelogement.png";

function Fichelogement() {
  return (
    <section>
      <div className="imagebannierelogement">
        <img
          className="imagefichelogement"
          src={imageLogement}
          alt="image bannière logement"
        />
      </div>
    </section>
  );
}
export default Fichelogement;
