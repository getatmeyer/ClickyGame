import React from "react";
import "./style.css";

const Nav = props => (

        <div className="nav">{props.children}
        <ul>
            <li id="current">Current Score: {props.score}</li>
            <li id="top">Top Score : { props.topScore}</li>
        </ul>
        </div>
);

export default Nav;
