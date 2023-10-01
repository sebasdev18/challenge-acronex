import React from "react";
import "./NavBar.css";
import logo from "./logo35x35.png";
import unimap from "./unimap_blanco.svg";
import usuario from "./usuario.png";
import { useState } from "react";
import App from "../../App";

export default function NavBar() {
  const [busqueda, setBusqueda] = useState("");

  const busquedas = (e) => {
    setBusqueda(e.target.value);
  };

  const [array, setArray] = useState([]);

  return (
    <div className="barra">
      <img src={logo} alt="" />
      <img src={unimap} alt="" className="img-unimap" />
      <input
        type="text"
        className="busqueda"
        placeholder="demo"
        onChange={busquedas}
      />
      <img src={usuario} alt="" />
    </div>
  );
}
