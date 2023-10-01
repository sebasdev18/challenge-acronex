import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import Machine from "../Info/Machine";

export default function card({ item }) {
  let taponamiento = (item.indicadores.taponamiento * 100).toFixed(1) + "%";
  let evaporacion = (item.indicadores.evaporacion * 100).toFixed(1) + "%";
  let viento = (item.indicadores.deriva * 100).toFixed(1) + "%";
  let calidad = ((1 - item.indicadores.calidad) * 100).toFixed(1) + "%";
  let cultivo = item.indicadores.cultivo;
  let humedad_grano = item.indicadores.humedad_grano + "%";
  let rinde_humedo = item.indicadores.rinde_humedo + "kg/ha";
  let rinde_seco = item.indicadores.rinde_seco + "kg/ha";

  return (
    <div className="fondo">
      <div className="tarjeta">
        <div className="encabezado">
          <div className={item.moving ? "circulo-verde" : "circulo-rojo"}></div>
          <div className="datos-encabezado">
            <p>
              {item.id} {item.description}
            </p>
            <p>{item.company}</p>
          </div>
        </div>
        <div className="datos">
          <div className="datos-arriba">
            <div className="taponamiento">
              <p>
                {!item.indicadores.taponamiento ? "Cultivo" : "Taponamiento"}
              </p>
              {!item.indicadores.taponamiento ? cultivo : taponamiento}
            </div>
            <div className="evaporacion">
              <p>
                {!item.indicadores.evaporacion
                  ? "Humedad grano"
                  : "Evaporacion"}
              </p>
              <p>
                {!item.indicadores.evaporacion ? humedad_grano : evaporacion}
              </p>
            </div>
          </div>
          <div className="datos-abajo">
            <div
              className={
                !item.indicadores.deriva ? "rinde-humedo" : "per-viento"
              }
            >
              <p>{!item.indicadores.deriva ? "Rinde humedo" : "Viento"}</p>
              <p>{!item.indicadores.deriva ? rinde_humedo : viento}</p>
            </div>
            <div
              className={!item.indicadores.calidad ? "rinde-seco" : "calidad"}
            >
              <p>{!item.indicadores.calidad ? "Rinde seco" : "Calidad"}</p>
              <p>{!item.indicadores.calidad ? rinde_seco : calidad}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
