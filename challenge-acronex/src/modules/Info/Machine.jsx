import React from "react";
import "./Machine.css";

export default function Machine() {
  return (
    <>
      <div className="fondo">
        <div className="info">
          <div className="encabezado">
            <p>Nombre maquina</p>
            <p>ID</p>
          </div>
          <div className="abajo">
            <div className="derecha">
              <div className="caja">
                <div className="encabezado-caja">
                  <p>General</p>
                </div>
              </div>
              <div className="caja">
                <div className="encabezado-caja">
                  <p>Clima</p>
                </div>
              </div>
              <div className="caja">
                <div className="encabezado-caja">
                  <p>Operación</p>
                </div>
              </div>
            </div>
            <div className="izquierda"></div>
          </div>
        </div>
      </div>
    </>
  );
}
