import React from "react";
import "../footer/footer.css";
import logoFooter from "../../assets/logofooter.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="logofooter">
        <img src={logoFooter} alt="Logo Kasa footer" />
      </div>
      <p>&#x24B8; 2020 kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
