import React, { useContext, useEffect, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";

export const Card = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch(
      "https://3001-4geeksacade-reactflaskh-qmzf5djgb97.ws-eu79.gitpod.io/api/members"
    )
      .then((response) => response.json())
      .then((data) => {
        setMembers(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="row text-center container-fluid mt-5">
      {members.map((item, index) => (
        <div className="card col p-4" key={index}>
          <p>Name: {item.name}</p>
          <p>Last_name: {item.last_name}</p>
          <p>Age: {item.age}</p>

          <button className="btn-warning mb-2">Ver</button>
          <button className="btn-danger mb-2">
            <BsFillTrashFill />
          </button>
        </div>
      ))}
    </div>
  );
};
