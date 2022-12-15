import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Formulario } from "../pages/formulario";
import "../../styles/home.css";

export const Home = () => {

	const navigate = useNavigate();

  const [name, setName] = useState("");
  const [last_name, setLast_name] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  const login = () => {

    fetch(process.env.BACKEND_URL + "/api/acceso", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: name,
        last_name: last_name,
        age: age
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.token) {
          localStorage.setItem("token", result.token);
          navigate("/members");
        } else {
          setError(result.msg);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const enviarDatos = () => {
    fetch(process.env.BACKEND_URL + "/api/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        name: name,
        last_name: last_name,
        age: age,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          setMensaje(result.msg);
        } else {
          setMensaje("Usuario ya existe");
        }
      })
      .catch((error) => console.log("error", error));
  };


  return (
    <div className="container">
      <h1 className="text-center p-5">
        "La familia es una de las obras maestras de la naturaleza". (George
        Santayana)
      </h1>
      <div className="row mb-5">
        <div className="col-4 align-self-center">
          <Formulario
            enviarDatos={enviarDatos}
            login={login}
            setName={setName}
            setLast_name={setLast_name}
            setAge={setAge}
            mensaje={mensaje}
          />
        </div>
        <div className="col-8">
          <img
            className="imagen"
            src="https://images.unsplash.com/photo-1503431153573-96e959f4d9b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          ></img>
        </div>
      </div>
    </div>
  );
};
