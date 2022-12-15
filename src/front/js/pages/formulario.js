import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Formulario = ({enviarDatos, setName, setAge, setLast_name, mensaje}) => {
  return (
    <div>
      <div className="card mt-5 p-3">
        <h4>Miembros</h4>
        <input className="form-control mt-2" placeholder="Email"></input>
        <input className="form-control mt-2" placeholder="Password"></input>
        <Link to="/members">
          <button className="btn-success mt-2">Entrar</button>
        </Link>
      </div>

      <div className="card mt-5 p-3">
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
        <button className="btn-success mt-2" onClick={enviarDatos}>
          Enviar
        </button>

        {mensaje && (
          <div className="text-center alert alert-warning" role="alert">
            {mensaje}
          </div>
        )}
      </div>
    </div>
  );
};
