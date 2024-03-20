import { Link } from "react-router-dom";
import "./error404.css";

function Error404() {
  return (
    <section className="ConteneurError404">
      <h1 className="TitleError404">404</h1>
      <p className="TexteError404">
        Oups!La page que vous demandez n'existe pas.
      </p>

      <Link to="/" className="LinkError404">
        Retourner sur la page d'accueil
      </Link>
    </section>
  );
}
export default Error404;
