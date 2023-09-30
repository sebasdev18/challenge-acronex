import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import Machine from "../Info/Machine";

export default function card({ item }) {
  return (
    <div className="fondo">
      <div className="tarjeta">
        <div className="encabezado">
          <div className={item.moving ? "circulo-verde" : "circulo-rojo"}></div>
          <div className="datos-encabezado">
            <p>
              ({item.id}) {item.description}
            </p>
            <p>{item.company}</p>
          </div>
        </div>
        <div className="datos">
          <div className="datos-arriba">
            <div className="taponamiento">
              <p>Taponamiento</p>
              <p>{item.indicadores.taponamiento}</p>
            </div>
            <div className="evaporacion">
              <p>Evaporacion</p>
              <p>{item.indicadores.evaporacion}</p>
            </div>
          </div>
          <div className="datos-abajo">
            <div className="per-viento">
              <p>Viento</p>
              <p>{item.indicadores.deriva}</p>
            </div>
            <div className="calidad">
              <p>Calidad</p>
              <p>{item.indicadores.calidad}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
