// routes.jsx
import React from "react";
import { Route } from "react-router-dom";

import Home from "../pages/home/home";
import Apropos from "../pages/apropos/apropos";
import Fichelogement from "../pages/fichelogement/fichelogement";
import Error404 from "../pages/error404/error404";

const AppRoutes = () => {
  return (
    <Route>
      <Route exact path="/" component={Home} />
      <Route path="/apropos" component={Apropos} />
      <Route path="/fichelogement" component={Fichelogement} />
      <Route component={Error404} />
    </Route>
  );
};

export default AppRoutes;
