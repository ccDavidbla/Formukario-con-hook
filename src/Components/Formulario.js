import React from "react";

const Formularios = ({ formData, handleInputChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
            />
            <br />
            <label htmlFor="apellido">Apellido:</label>
            <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleInputChange}
            />
            <br />
            <label htmlFor="correoElectronico">Correo electrónico:</label>
            <input
                type="email"
                id="correoElectronico"
                name="correoElectronico"
                value={formData.correoElectronico}
                onChange={handleInputChange}
            />
            <br />
            <label htmlFor="contrasena">Contraseña:</label>
            <input
                type="password"
                id="contrasena"
                name="contrasena"
                value={formData.contrasena}
                onChange={handleInputChange}
            />
            <br />
            <label htmlFor="confirmarContrasena">Confirmar contraseña:</label>
            <input
                type="password"
                id="confirmarContrasena"
                name="confirmarContrasena"
                value={formData.confirmarContrasena}
                onChange={handleInputChange}
            />
            <br />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formularios;
