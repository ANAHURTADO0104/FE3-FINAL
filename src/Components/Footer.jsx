import React, { useContext } from "react";
import { appContext } from "../Context/Context";
import "./css/Footer.css";
const Footer = () => {
  const { state } = useContext(appContext);

  return (
    <footer className={state.theme == "light" ? "light-footer" : "dark-footer"}>
      <p>Powered by</p>
      <img src="/images/DH.png" alt="DH-logo" />
      <div id="logo-container">
        <img src="/images/ico-facebook.png" alt="facebook" />
        <img src="/images/ico-instagram.png" alt="instagram" />
        <img src="/images/ico-tiktok.png" alt="tiktok" />
        <img src="/images/ico-whatsapp.png" alt="whatsapp" />
      </div>
    </footer>
  );
};

export default Footer;
