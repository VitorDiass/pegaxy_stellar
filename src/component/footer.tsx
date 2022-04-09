import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FaDiscord, FaEnvelope, FaHeart } from 'react-icons/fa'

function Footer() {
  return (
   <>
    <div className="flex text-base justify-center items-center gap-x-1 mt-10">
      Made with <FaHeart size={14} color="red"/> by Vitor Dias
    </div>
    <div className='flex text-base gap-x-1 justify-center items-center'>
      <FaDiscord className='!mb-0.5' size={14}/> Sherlock7#4380 |  <FaEnvelope className='!mb-0.5' size={14}/> pegaxystellar@gmail.com
      {/*   <a href='https://github.com/VitorDiass' target="_blank">Vitor Dias</a> */}
    </div>
    </>
  )
}

export default Footer