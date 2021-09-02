import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import axios from "axios";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
  const [categoria, setCategoria] = useState("");
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const key = "41d8fe807b4c21599e28003cf2d7ea1c";
      const url = `https://gnews.io/api/v4/top-headlines?token=${key}&lang=es&topic=${categoria}`;
      const resultado = await axios.get(url);

      setNoticias(resultado.data.articles);
    };
    consultarAPI();
  }, [categoria]);

  return (
    <>
      <Header titulo="Buscador de Noticias" />

      <div className="container white">
        <Formulario setCategoria={setCategoria} />
      </div>
      <ListadoNoticias noticias={noticias} />
    </>
  );
}

export default App;
