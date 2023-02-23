import React from "react";
import { Link } from "react-router-dom";
import cookies from "browser-cookies";
import history from "../../../../helpers/history";

import "./header.scss";

function Header() {
  const handleLogout = () => {
    cookies.erase("token");
    history.push("/");
  };
  console.log("history: ", history.location.pathname);

  const pathName = history.location.pathname;

  return (
    <div className="header">
      <Link className="a" to="/home">
        Home
      </Link>
      <Link className="a" to="/about">
        About
      </Link>
      <Link className="a" to="/Contact">
        Contact
      </Link>
      <div className="topnav-logout" onClick={() => handleLogout()}>
        Logout
      </div>
    </div>
  );
}

export default Header;
