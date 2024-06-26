import React from 'react'
import '../styles/preloader.css'

const Loader = () => {
  return (
    <>
    <div className="loader" id="loader">
      <div className="spinner"></div>
      <h2 className="loader-tllr">Loading</h2>
    </div>
    </>
  )
}

export default Loader;
