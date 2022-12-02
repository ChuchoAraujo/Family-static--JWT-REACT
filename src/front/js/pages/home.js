import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
    <div className="text-center mt-5">
    	<h1>Encuentra a tu familia!!</h1>
    	<div className="mt-5">
        	<button>GET - Members</button>
        	<button className="ms-5">ONE - Member</button>
        	<button className="ms-5">POST - Member</button>
        	<button className="ms-5">DELETE - Member</button>
    	</div>
    </div>
  );
};
