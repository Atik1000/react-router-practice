import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div  id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link class="nav-item nav-link active" to={"/"}>
            Home
          </Link>
          <Link class="nav-item nav-link" to={"/create"}>
            Create Product
          </Link>
          <Link class="nav-item nav-link" to={"/update"}>
            Update  Product
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
