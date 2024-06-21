import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { appContext } from "../Context/Context";
import "./css/Navbar.css";

const Navbar = () => {
  const { state, dispatch } = useContext(appContext);
  const [selectedLink, setSelectedLink] = useState("");
  const location = useLocation();

  const setTheme = (event) => {
    dispatch({ type: "change-theme" });
  };

  const handleLinkClick = (event) => {
    setSelectedLink(event.target.getAttribute("href"));
  };

  useEffect(() => {
    console.log(location.pathname);
    setSelectedLink(location.pathname);
  }, [Location.pathname]);

  return (
    <nav className={state.theme == "light" ? "light-nav" : "dark-nav"}>
      <div>
        <Link
          className={`item ${
            selectedLink === "/home" || selectedLink === "/" ? "selected" : ""
          }`}
          to="/home"
          onClick={handleLinkClick}
        >
          Home
        </Link>
        <Link
          className={`item ${selectedLink === "/contact" ? "selected" : ""}`}
          to="/contact"
          onClick={handleLinkClick}
        >
          Contact
        </Link>
        <Link
          className={`item ${selectedLink === "/favs" ? "selected" : ""}`}
          to="/favs"
          onClick={handleLinkClick}
        >
          Favs
        </Link>
      </div>
      <button className="item" onClick={setTheme}>
        Change theme
      </button>
    </nav>
  );
};

export default Navbar;
