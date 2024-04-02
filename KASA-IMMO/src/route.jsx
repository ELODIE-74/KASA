import React from "react";
/*import ReactDOM from "react-dom";*/
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./components/header/header.jsx";
import "./components/header/header.css";
import Footer from "./components/footer/footer.jsx";
import Home from "./pages/home/home.jsx";
import Apropos from "./pages/apropos/apropos.jsx";
import Fichelogement from "./pages/fichelogement/fichelogement.jsx";
import Error404 from "./pages/error404/error404.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fichelogement/:id" element={<Fichelogement />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
