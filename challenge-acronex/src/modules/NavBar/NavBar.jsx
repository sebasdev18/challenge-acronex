import React from "react";
import "./NavBar.css";
import logo from "./logo35x35.png";
import unimap from "./unimap_blanco.svg";
import usuario from "./usuario.png";

export default function NavBar() {
  return (
    <div className="barra">
      <img src={logo} alt="" />
      <img src={unimap} alt="" className="img-unimap" />
      <input type="search" className="busqueda" placeholder="demo" />
      <img src={usuario} alt="" />
    </div>
  );
}
