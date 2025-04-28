import React from 'react'
import Navbar from './Navbar'
import galleryImage1 from '../assets/Rectangle-15.svg'
import galleryImage2 from '../assets/Rectangle-16.svg'
import galleryImage3 from '../assets/Rectangle-17.svg'
import groupIcon from '../assets/Group.svg'
import '../App.css'

const Landing = () => {
  return (
    <div className="landing-container">
      <Navbar />
      <main className="landing-main">
        <div className="hero-container">
          <section className="hero-section">
            <h1 className="hero-title">Experience History As It Moves.</h1>
            <p className="hero-description">Clyne is an AI powered art gallery where history is relived with intuitive technology.</p>
            <button className="cta-button">
              Register for Art Exhibition
              <img src={groupIcon} alt="" className="button-icon" />
            </button>
          </section>
          <section className="hero-image-section">
            <div className="image-container">
              <img src={galleryImage1} alt="Historical Art Gallery Base" className="hero-image1" />
              <img src={galleryImage2} alt="Historical Art Gallery Overlay 1" className="hero-image2 overlay-1" />
              <img src={galleryImage3} alt="Historical Art Gallery Overlay 2" className="hero-image3 overlay-2" />
              <div className="image-overlay"></div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Landing