import React from "react";
import logo from "../assets/site-logo.svg"

function Header() {
  return (
    <nav className=" flex items-center  p-4">
      <img src={logo} alt="Logo" className="h-12 w-12 mr-2" />
      <h1 className="text-2xl font-bold">DSA Revision</h1>
      
    </nav>
  );
}

export default Header;
