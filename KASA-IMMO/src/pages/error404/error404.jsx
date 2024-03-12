import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>404</h1>
      <p>Oups!La page que vous demandez n'existe pas.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
