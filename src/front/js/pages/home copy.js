import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
	const [last_name, setLast_name] = useState("");
	const [id, setId] = useState("");
	const [member, setMember] = useState("");

	useEffect(()=>{
		var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://3001-4geeksacade-reactflaskh-qmzf5djgb97.ws-eu79.gitpod.io/api/members",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => setMember(result))
      .catch((error) => console.log("error", error));
	},[])




  // ------------- POST MEMBER --------------------
  const postMembers = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");

    var raw = JSON.stringify({
      age: age,
      last_name: last_name,
	  name: name,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://3001-4geeksacade-reactflaskh-qmzf5djgb97.ws-eu79.gitpod.io/api/member",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

	
  // ------------- POST MEMBER --------------------
	
	const deleteMember = () => {

		var myHeaders = new Headers();
        myHeaders.append("Content-Type", "text/plain");

        var raw = JSON.stringify({
		  id: id
		});
		
	    var requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

    fetch(
      "https://3001-4geeksacade-reactflaskh-qmzf5djgb97.ws-eu79.gitpod.io/api/member/7",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
	}
	
	
  return (
    <div className="text-center mt-5">
      <h1>Encuentra a tu familia!!</h1>
      <div className="mt-5">
        <div className="mb-5 mt-5">
          <input placeholder="name"></input>
          <input className="ms-3" placeholder="last name"></input>
          <input className="ms-3" placeholder="age"></input>
          <button type="button" className="btn btn-primary ms-3">
            GET
          </button>
        </div>
        <hr />
        <div className="mb-5 mt-5">
          <input placeholder="name"></input>
          <input className="ms-3" placeholder="last name"></input>
          <input className="ms-3" placeholder="age"></input>
          <button type="button" className="btn btn-warning ms-3">
            ONE MEMBER
          </button>
        </div>


        <hr />

        <div className="mb-5 mt-5">
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          ></input>
          <input
            onChange={(e) => setLast_name(e.target.value)}
            className="ms-3"
            placeholder="last name"
          ></input>
          <input
            onChange={(e) => setAge(e.target.value)}
            className="ms-3"
            placeholder="age"
          ></input>
          <button
            onClick={postMembers}
            type="button"
            className="btn btn-success ms-3"
          >
            POST MEMBER
          </button>
        </div>
        <hr />
        <div className="mb-5 mt-5">
          <input
            onChange={(e) => setId(e.target.value)}
            className="ms-3"
            placeholder="id"
          ></input>
				  <button onClick={deleteMember}
					  type="button" className="btn btn-danger ms-3">
            DELETE MEMBER
          </button>
        </div>
      </div>
    </div>
  );
};
