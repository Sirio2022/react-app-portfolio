import React from 'react'

const Contact = () => {

    



  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>

    <form method='POST' action="https://getform.io/f/a08f2c6a-10f8-45d6-b869-35932e8700c0" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-[#8892b0]'>Contáctame</p>
            <p className='py-4 text-[#8892b0]'>Si deseas contactarme, puedes hacerlo a través de este formulario</p>

        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name="name"/>
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name="email"/>
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Mensaje'></textarea>
        <button className='text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center'>Enviar</button>

    </form>

    </div>
  )
}

export default Contact