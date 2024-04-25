import React from "react";

const Navbar = () => {
  return (
    <div className="navBar">
      <a href="/">
      <h1 className="FoodFoc">FoodFocus</h1>
      </a>
      <div className="navItems">
        <a href="/About">About</a>
        <a href="/Product">Product</a>
      </div>
    </div>
  );
};

export default Navbar;
