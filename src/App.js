import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import axios from "axios";

function App() {
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    const consultarAPI = async () => {
      const key = "41d8fe807b4c21599e28003cf2d7ea1c";
      const url = `https://gnews.io/api/v4/top-headlines?token=${key}&lang=es&topic=${categoria}`;
      const resultado = await axios.get(url);

      console.log(resultado);
    };
    consultarAPI();
  }, [categoria]);

  return (
    <>
      <Header titulo="Buscador de Noticias" />

      <div className="container white">
        <Formulario setCategoria={setCategoria} />
      </div>
    </>
  );
}

export default App;
