import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import axios from "axios";

function App() {
  const [categoria, setCategoria] = useState("");

  // useEffect(() => {
  //   const consultarAPI = async () => {
  //     const key = "";
  //     const url = ``;
  //     const resultado = await axios.get(url);

  //     console.log(resultado);
  //   };
  //   consultarAPI();
  // }, [categoria]);

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
