import React from "react";
import "./Card.css";

export default function card() {
  return (
    <div className="fondo">
      <div className="tarjeta">
        <div className="encabezado">
          <div className="circulo"></div>
          <div className="datos-encabezado">
            <p>(1232134) maquina cosechadora</p>
            <p>Empresa</p>
          </div>
        </div>
        <div className="datos">
          <div className="datos-arriba">
            <div className="taponamiento">taponamiento</div>
            <div className="evaporacion">evaporacion</div>
          </div>
          <div className="datos-abajo">
            <div className="per-viento">viento</div>
            <div className="calidad">calidad</div>
          </div>
        </div>
      </div>
    </div>
  );
}
