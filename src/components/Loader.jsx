import React from 'react'
import '../styles/preloader.css'
import LoadingLogo from '../assets/Logo/Loading-Logo.png'
import { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Loader = () => {

  const loaderRef = useRef();
  const path = useLocation();

  setTimeout(() => {
    loaderRef.current.style.opacity = '0';
    setTimeout(() => {
      loaderRef.current.style.display = 'none';
    }, 350);
  }, 1500);
  
  return (
    <>
      <div ref={loaderRef} className="loader" id="loader">
        <div className="spinner"></div>
      </div>
    </>
  )
}

export default Loader;
