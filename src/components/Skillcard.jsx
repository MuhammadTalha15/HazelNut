import React from 'react'
import '../styles/skillcard.css'

const Skillcard = (props) => {
  return (
    <>
        <div className="mn-card">
            <h2 className="abt-skl-head">{props.heading}</h2>
            <p className="abt-skl-des">{props.description}</p>
        </div>
    </>
  )
}

export default Skillcard
