import React from 'react'
import '../styles/preloader.css'

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
