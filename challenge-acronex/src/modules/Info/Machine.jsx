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
            <div className="izquierda"></div>
            <div className="derecha">
              <div className="caja">
                <div className="encabezado-caja">
                  <p>General</p>
                </div>
                <div className="cuerpo-caja">
                  <div className="cuerpo-caja-izq">
                    <p>Cosechando</p>
                    <p>Bateria interna</p>
                    <p>Bateria vehiculo</p>
                    <p>Uso combustible</p>
                  </div>
                  <div className="cuerpo-caja-der">
                    <p>Dato 1</p>
                    <p>dato2</p>
                    <p>dato3</p>
                    <p>dato4</p>
                  </div>
                </div>
              </div>
              <div className="caja">
                <div className="encabezado-caja">
                  <p>Clima</p>
                </div>
                <div className="cuerpo-caja">
                  <div className="cuerpo-caja-izq">
                    <p>Temperatura</p>
                    <p>Humedad</p>
                    <p>Direccion del viento</p>
                    <p>Velocidad del viento</p>
                  </div>
                  <div className="cuerpo-caja-der">
                    <p>Dato 1</p>
                    <p>dato2</p>
                    <p>dato3</p>
                    <p>dato4</p>
                  </div>
                </div>
              </div>
              <div className="caja">
                <div className="encabezado-caja">
                  <p>Operación</p>
                </div>
                <div className="cuerpo-caja">
                  <div className="cuerpo-caja-izq">
                    <p>Velocidad</p>
                    <p>Presion</p>
                    <p>Producto / Hectarea</p>
                    <p>Ancho</p>
                  </div>
                  <div className="cuerpo-caja-der">
                    <p>Dato 1</p>
                    <p>dato2</p>
                    <p>dato3</p>
                    <p>dato4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
