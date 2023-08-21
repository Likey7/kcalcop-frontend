import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'

const Main = () => {
  return (
    <div id='main' className='wrap'>Main
    <img src='/image/logo.svg' alt='로고이미지'/>
    <Link to='/searchFood'>link to searchFood</Link>
    </div>
  )
}

export default Main