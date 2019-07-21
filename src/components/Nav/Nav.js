import React from "react";
import "./style.css";

function Nav(props) {
  return <h1 className="nav">{props.children}</h1>;
}

export default Nav;