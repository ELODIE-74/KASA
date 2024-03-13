import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Header from "./components/header/header";
import "./utils/style/header.css";
import Footer from "./components/footer/footer.jsx";
//import Sectioncard from "./components/card/card.jsx";

function Home() {
  // Votre composant Home
}

function Apropos() {
  // Votre composant Apropos
}

function Fichelogement() {
  // Votre composant Fichelogement
}

function ErrorPage() {
  // Votre composant ErrorPage
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/fichelogement" element={<Fichelogement />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer></Footer>
    </Router>
  </React.StrictMode>
);
export default App;
