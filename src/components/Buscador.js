import React, { useState, useEffect } from "react";
import Error from "./Error";

const Buscador = ({ guardarBusqueda }) => {
  const [terminoBusqueda, guardarTerminoBusqueda] = useState("");
  const [error, guardarError] = useState(false);

  const handleSubmitBuscarImagen = e => {
    e.preventDefault();

    // Validar.
    if (terminoBusqueda === "") {
      guardarError(true);
      return;
    }

    // Enviar.
    guardarError(false);
    guardarBusqueda(terminoBusqueda);
  };

  return (
    <form onSubmit={handleSubmitBuscarImagen}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca una imagen, ejemplo: Fútbol o Café..."
            onChange={e => guardarTerminoBusqueda(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Buscar"
          />
        </div>
      </div>

      {error ? <Error message="Agrega un término de búsqueda" /> : null}
    </form>
  );
};

export default Buscador;
