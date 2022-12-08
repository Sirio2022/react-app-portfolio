import React, {useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const Contact = () => {

  const [input, setInput] = useState({
    name: '',
    email: '',
    message: ''
  })

  function handleOnChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method: 'POST',
      url: 'https://getform.io/f/a08f2c6a-10f8-45d6-b869-35932e8700c0',
      data: input,
      headers: {"Content-Type": "multipart/form-data"}
    }).then((response) => {
      Swal.fire({
        icon: 'success',
        title: 'Mensaje enviado',
        timer: 2000,
        text: 'Gracias por contactarme, te responderé a la brevedad'
      })
      }).then(() => {
      setInput({
        name: '',
        email: '',
        message: ''
      })
    })
  }
    
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>

    <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-[#8892b0]'>Contáctame</p>
            <p className='py-4 text-[#8892b0]'>Si deseas contactarme, puedes hacerlo a través de este formulario</p>

        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Tu nombre' name="name" value={input.name} onChange={handleOnChange}/>
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name="email" value={input.email} onChange={handleOnChange}/>
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Mensaje' value={input.message} onChange={handleOnChange}></textarea>
        <button className='text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center' type='submit'>Enviar</button>

    </form>

    </div>
  )
}

export default Contact