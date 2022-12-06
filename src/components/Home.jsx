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
        <p className="text-[#8892b0] py-4 max-w-[700px]">Full Stack Developer con formación como Diseñador Web. Experiencia trabajando en NodeJS, React,
            Redux, Mongo, Express, Posgresql, entre otras tecnologías del sector, además de metodologías ágiles. 
            Participé en la creación de un E-commerce para el diseño y compra de remeras estampadas. 
            Trayectoria laboral en áreas administrativas y financieras, gestionando la planeación, programación, direccionamiento de objetivos. 
            Con pensamiento creativo, resolución de problemas, trabajo en equipo, comunicación, liderazgo y autonomía.</p>
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
