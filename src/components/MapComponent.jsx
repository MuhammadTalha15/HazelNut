import React from 'react'
import '../styles/home.css'

const MapComponent = () => {
    return (
        <>
            <div className="map-comp">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11960.73628603035!2d73.19322998379073!3d33.5738626555884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfee8a1d08ba33%3A0x96f9fcf07416335a!2sNaval%20Anchorage%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory!5e0!3m2!1sen!2s!4v1722579357662!5m2!1sen!2s"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    )
}

export default MapComponent
