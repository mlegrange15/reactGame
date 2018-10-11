import React from "react";
import "./Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const Navbar = props => (
  <nav className="navbar justify-content-center sticky-top shadow-lg">
    <ul className="nav">
      <li>
        <a href="https://github.com/mlegrange15/reactGame" target="_blank">
          <i className="fab fa-github fa-3x" />
        </a>
      </li>
      <li className="brand">
        <h2>React.js Game</h2>
      </li>
      <li>
        <h2>
          Score: {props.score} | Top Score: {props.totalscore}
        </h2>
      </li>
    </ul>
  </nav>
);

export default Navbar;
