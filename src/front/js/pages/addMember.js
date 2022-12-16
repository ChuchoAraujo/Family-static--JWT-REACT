import React, { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const AddMember = () => {
  const [name, setName] = useState("");
  const [last_name, setLast_name] = useState("");
  const [age, setAge] = useState("");
  const [otro, setOtro] = useState("");


  const newMember = () => {
    fetch(process.env.BACKEND_URL + "/api/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "name": name,
        "last_name": last_name,
        "age": age
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          setOtro(result.msg);
        console.log(result)
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="row container">
      <div className="card mt-5 p-3 containerForm">
        <h4>New member</h4>
        <input
          className="form-control mt-2"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          className="form-control mt-2"
          placeholder="Last name"
          onChange={(e) => setLast_name(e.target.value)}
        ></input>
        <input
          className="form-control mt-2"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        ></input>

        <button className="btn-warning mt-2" onClick={newMember}>
          Enviar
        </button>

        {otro && (
          <div className="text-center alert alert-warning mt-5" role="alert">
            {otro}
          </div>
        )}
      </div>
    </div>
  );
};
