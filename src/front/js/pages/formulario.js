import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Formulario = ({
  registro,
  login,
  setEmail,
  setPassword,
  mensaje,
  error,
}) => {
  
  return (
    <div className="me-5">
      <div className="card mt-5 p-3 containerForm">
        <h4>Acceso</h4>
        <input
          className="form-control mt-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="form-control mt-2"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button onClick={login} className="btn-warning mt-2">
          Entrar
        </button>

        {error && (
          <div className="text-center alert alert-warning mt-5" role="alert">
            {error}
          </div>
        )}
      </div>

      <div className="card mt-5 p-3 containerForm">
        <h4>Registro</h4>
        <input
          className="form-control mt-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="form-control mt-2"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="btn-warning mt-2" onClick={registro}>
          Enviar
        </button>

        {mensaje && (
          <div className="text-center alert alert-warning mt-5" role="alert">
            {mensaje}
          </div>
        )}
      </div>
    </div>
  );
};
