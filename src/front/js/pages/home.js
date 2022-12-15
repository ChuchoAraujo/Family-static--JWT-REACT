import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Formulario } from "../pages/formulario";
import "../../styles/home.css";

export const Home = () => {

	const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  const login = () => {

    fetch(process.env.BACKEND_URL + "/api/acceso", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: email,
        password: password,
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

  const registro = () => {
    fetch(process.env.BACKEND_URL + "/api/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "email": email,
        "password": password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          setMensaje(result.msg);
        }
      })
      .catch((error) => console.log("error", error));
  };


  return (
    <div className="container">
      <h1 className="text-center p-4">
        Family Rest Api - JWT- REACT -AUTENTIFICATION
      </h1>
      <h2 className="text-center p-2">Encuentra a tu familia!</h2>
      <hr />

      <div className="row mb-5 p-5">
        <div className="col-4 align-self-center">
          <Formulario
            registro={registro}
            login={login}
            setEmail={setEmail}
            setPassword={setPassword}
            error={error}
            mensaje={mensaje}
          />
        </div>
        <div className="col-8 align-self-center">
          <img
            width={800}
            className="imagen"
            src="https://images.unsplash.com/photo-1503431153573-96e959f4d9b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          ></img>
        </div>
      </div>
    </div>
  );
};
