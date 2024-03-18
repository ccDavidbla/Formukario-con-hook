import React, { useState } from "react";
import Formularios from "./Components/Formulario";
import Resultados from "./Components/Resultados";

const App = () => {
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correoElectronico: "",
    contrasena: "",
    confirmarContrasena: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMostrarResultados(true);
  };

  return (
    <div>
      <h1>Formulario</h1>
      <Formularios
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      {mostrarResultados && <Resultados formData={formData} />}
    </div>
  );
};

export default App;
