import React from 'react'
import '../styles/smoothscroll.css'

const SmoothScrollBtn = () => {

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }
  return (
    <button onClick={scrollTop} className='smoothscroll'>
        <div className="ico"></div>
    </button>
  )
}

export default SmoothScrollBtn
