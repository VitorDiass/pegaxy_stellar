import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogoComponent = () => {
  const navigate = useNavigate();
  return (
        <img className='cursor-pointer' src='/images/logo.png' height={40} width={40} onClick={() => navigate('/')}/> 
  )
}

export default LogoComponent