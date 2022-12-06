import React, {useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo-Transparency-(Web).png";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)



  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="logo" style={{ width: "100px" }} />
      </div>

      {/* menu */}
      
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>Acerca de mí</li>
          <li>Aptitudes y conocimientos</li>
          <li>Proyectos</li>
          <li>Contáctame</li>
        </ul>
 

      {/* Hamburger menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">Acerca de mí</li>
        <li className="py-6 text-4xl">Aptitudes y conocimientos</li>
        <li className="py-6 text-4xl">Proyectos</li>
        <li className="py-6 text-4xl">Contáctame</li>
      </ul>

      {/* social icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
