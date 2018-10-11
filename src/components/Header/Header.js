import React from "react";
import "./Header.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const Header = () => (
<header className="header">
 <h1>Travel Memory Game!</h1>
 <h2>Click on a city image to earn points, but don't click on any more than once!</h2>
</header>
);

export default Header;