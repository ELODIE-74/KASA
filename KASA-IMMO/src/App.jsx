import { useState } from "react";

//import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <></>;
}

export default App;
/*import { Routes, Route } from "react-router-dom";

import "./index.css";
//pages
import Home from "./pages/home/home.jsx";
import Apropos from "./pages/apropos/apropos.jsx";
import Fichelogement from "./pages/fichelogement/fichelogement.jsx";
import Error404 from "./pages/error404/error404.jsx";

//composant header et footer
import Header from "./components/header/header.jsx"; // Ajout de l'extension .jsx
import Footer from "./components/footer/footer.jsx";

// Routes de l'application // Layouts de l'application
function App() {
  return (
    <>
      <div className="contenair">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/fichelogement" element={<Fichelogement />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;*/
