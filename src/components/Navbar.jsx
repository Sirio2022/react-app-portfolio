import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo-Transparency-(Web).png";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="logo" style={{ width: "100px" }} />
      </div>

      {/* menu */}
      <div>
        <ul className="flex">
          <li>Home</li>
          <li>Acerca de mí</li>
          <li>Aptitudes y conocimientos</li>
          <li>Proyectos</li>
          <li>Contáctame</li>
        </ul>
      </div>

      {/* Hamburger menu */}
      <div className="hidden">
        <FaBars />
      </div>

      {/* Mobile menu */}
      <ul className="hidden">
        <li>Home</li>
        <li>Acerca de mí</li>
        <li>Aptitudes y conocimientos</li>
        <li>Proyectos</li>
        <li>Contáctame</li>
      </ul>

      {/* social icons */}
      <div></div>
    </div>
  );
};

export default Navbar;
