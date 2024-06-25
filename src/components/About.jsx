import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 text-[#8892b0]">
              Acerca de mí
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hola, soy JuanMa, un gusto tenerte por acá, echa un vistazo!</p>
          </div>
          <div>
            <p>
              Full Stack Developer con formación como Diseñador Web. Experiencia
              trabajando en NodeJS, React, Redux Toolkit, Mongo, Express,
              Posgresql, entre otras tecnologías del sector, además de
              metodologías ágiles. He creado múltiples proyectos, como
              Ecommerce, consulta de APIs, RESTful API, etc, poniendo en
              práctica los conocimientos adquiridos. Trayectoria laboral en
              áreas administrativas y financieras, gestionando la planeación,
              programación, direccionamiento de objetivos. Con pensamiento
              creativo, resolución de problemas, trabajo en equipo,
              comunicación, liderazgo y autonomía.
              {'\n'}
              Trayectoria laboral en áreas administrativas y financieras,
              gestionando la planeación, programación, direccionamiento de
              objetivos. Con pensamiento creativo, resolución de problemas,
              trabajo en equipo, comunicación, liderazgo y autonomía.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
