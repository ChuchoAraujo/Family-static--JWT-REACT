import React, { useContext, useEffect, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { AddMember } from "../pages/addMember";

export const Card = () => {
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();

  const deleteMember = (index) => {
    setMembers(members.filter((Members, element) => element !== index))
  }

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/private", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (!result.correcto) {
          navigate("/");
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

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
    <>
      <nav className="text-center p-5">
        <MdOutlineFamilyRestroom fontSize={100} />
        <h1>Members of family</h1>
      </nav>

      <main className="row container-fluid  text-center">
        {members.map((item, index) => (
          <div className="card-body col-2 p-4 m-2 containerForm" key={index}>
            <p>Name: {item.name}</p>
            <p>Lastname: {item.last_name}</p>
            <p>Age: {item.age}</p>
            <hr></hr>

            <Link to={"/members/" + (index + 1)}>
              <button className="btn-warning mb-2">Ver</button>
            </Link>

            <button onClick={()=> deleteMember(index)} className="btn-danger mb-2 ms-2">
              <BsFillTrashFill />
            </button>
          </div>
        ))}
      </main>

      <footer className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <AddMember />
        </div>
        <div className="col-3"></div>

        <button className="btn btn-success mt-5" onClick={logOut}>
          logout
        </button>
      </footer>
    </>
  );
};
