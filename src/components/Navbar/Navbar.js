import React from "react";
import "./Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const Navbar = props => (
<nav className="navbar justify-content-center sticky-top shadow-lg">
    <ul className="nav">
      <li className="brand">
        <h2>Click Game</h2>
      </li>
      <li className="mr-5 ml-5">
        <h2>Click a Picture to begin</h2>
      </li>
      <li>
        <h2>Score: {props.score} | Top Score: {props.totalscore}</h2>
      </li>
    </ul>
</nav>
);

export default Navbar;