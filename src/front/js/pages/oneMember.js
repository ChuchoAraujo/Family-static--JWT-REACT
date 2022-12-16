import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const OneMember = () => {
  const [member, setMembers] = useState([]);
  const params = useParams();


      useEffect(() => {
         fetch(process.env.BACKEND_URL + "/api/members/" + params.idMember, {
           method: "GET",
           headers: {
             "Content-Type": "application/json",
           },
         })
           .then((response) => response.json())
           .then((result) => {
            //  setMembers(result);
             console.log(result);
           })
           .catch((error) => console.log("error", error));
      }, []);




  return (
    <>
      <main className="row container-fluid  text-center">
        <div className="card-body col-2 p-4 m-2 containerForm">
          <p>Name: {member.name}</p>
          <p>Lastname: {member.last_name}</p>
          <p>Age: {member.age}</p>
          <hr></hr>
        </div>
      </main>
    </>
  );
};
