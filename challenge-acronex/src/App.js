import NavBar from "./modules/NavBar/NavBar.jsx";
import Card from "./modules/Card/Card.jsx";
import Machine from "./modules/Info/Machine.jsx";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    const url = "https://wrk.acronex.com/api/challenge/machines/";
    const pedido = fetch(url);
    pedido
      .then((response) => response.json())
      .then((datos) => setArray(datos))
      .catch(console.log);
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
      <NavBar />
      <div className="grilla">
        {array.map((e) => (
          <Card item={e} />
        ))}
      </div>
    </>
  );
}

export default App;
