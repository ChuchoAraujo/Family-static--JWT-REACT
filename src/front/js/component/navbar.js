import React from "react";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { SiGitpod } from "react-icons/si";

export const Navbar = () => {
	return (
    <nav className="navbar navbarColor row text-center">
      <div className="containerIcons col-2">
        <AiFillFacebook fontSize={30} />
        <AiFillInstagram className="ms-2" fontSize={30} />
        <SiGitpod className="ms-2" fontSize={30} />
      </div>

      <div className="col-8"></div>

      <div className="containerHome col-2">
        <Link to="/">
          <h3 className="containerHome">Home</h3>
        </Link>
      </div>

    </nav>
  );
};
