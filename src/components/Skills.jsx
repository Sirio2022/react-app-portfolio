import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/javascript.png'
import REACT from '../assets/react.png'
import NODE from '../assets/node.png'
import MONGO from '../assets/mongo.png'
import GIT from '../assets/github.png'
import TAILWIND from '../assets/tailwind.png'


const Skills = () => {
  return (
    <div name="skills" className='bg-[#0a192f] text-[#8892b0]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className="text-4xl font-bold inline border-b-4 ">Experiencia</p>
                <p className='py-4'>Estas son algunas de las tecnologias con las que he trabajado</p>
            </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML"/>
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="HTML"/>
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={TAILWIND} alt="HTML"/>
                <p className='my-4'>TAILWIND</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={GIT} alt="HTML"/>
                <p className='my-4'>GITHUB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JS} alt="HTML"/>
                <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={MONGO} alt="HTML"/>
                <p className='my-4'>MONGO</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={NODE} alt="HTML"/>
                <p className='my-4'>NODE</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={REACT} alt="HTML"/>
                <p className='my-4'>REACT</p>
            </div>
        </div>


        </div>
    </div>
  )
}

export default Skills