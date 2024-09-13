import React from 'react'
import '../styles/preloader.css'
import LoadingLogo from '../assets/Logo/Loading-Logo.png'

const Loader = () => {
  return (
    <>
    <div className="loader" id="loader">
      <div className="spinner"></div>
      <img className='loader-logo' src={LoadingLogo} alt="" loading='lazy'/>
    </div>
    </>
  )
}

export default Loader;
