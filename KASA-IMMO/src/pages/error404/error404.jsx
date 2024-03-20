import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="ConteneurError404" id="error404">
      <h1 className="TitleError404">404</h1>
      <p className="TexteError404">
        Oups!La page que vous demandez n'existe pas.
      </p>

      <Link to="/" className="LinkError404">
        Page d'accueil
      </Link>
    </div>
  );
}
export default Error404;
