import React from 'react'
import '../styles/footer.css'

const Footer = () => {
    const date = new Date();
    let currentYear = date.getFullYear()
  return (
    <>
        <section className="footer">
            <p className="footer-text">{`Copyright © ${currentYear} Website | Muhammad Talha®. All rights reserved.`}</p>
        </section>
    </>
  )
}

export default Footer
