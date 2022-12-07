import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen  bg-[#0a192f]">

    {/* container */}
    <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-300">Hola, mi nombre es</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Juan Manuel Álvarez</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">Soy Full Stack Developer.</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
            Desarrollador FullStack graduado de Henry.
            Me gusta programar, fan de los videojuegos y la guitarra, estoy dispuesto a aprender día a día.
            Estoy dispuesto a embarcarme en este mundo inmenso que es la programación.   </p>
        <div>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600">Ver mi trabajo  
            
            <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3"/>
            </span>
            
            </button>
        </div>

    </div>

  </div>
  )
};

export default Home;
