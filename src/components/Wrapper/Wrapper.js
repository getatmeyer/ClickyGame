import React from "react";
import "./style.css";

//stateless
const Wrapper = props => 
<div className="wrapper">{props.children}</div>;

export default Wrapper;