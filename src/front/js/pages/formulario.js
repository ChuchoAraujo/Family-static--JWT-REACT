import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Formulario = ({enviarDatos, login, setName, setAge, setLast_name, mensaje}) => {
  return (
    <div className="me-5">
      <div className="card mt-5 p-3 containerForm">
        <h4>Acceso</h4>
        <input
          className="form-control mt-2"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          className="form-control mt-2"
          placeholder="Lastname"
          onChange={(e) => setLast_name(e.target.value)}
        ></input>
        <input
          className="form-control mt-2"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        ></input>

        <button onClick={login} className="btn-warning mt-2">
          Entrar
        </button>
      </div>

      <div className="card mt-5 p-3 containerForm">
        <h4>Registro</h4>
        <input
          className="form-control mt-2"
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          className="form-control mt-2"
          placeholder="Last Name"
          onChange={(e) => setLast_name(e.target.value)}
        ></input>
        <input
          className="form-control mt-2"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        ></input>
        <button className="btn-warning mt-2" onClick={enviarDatos}>
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
