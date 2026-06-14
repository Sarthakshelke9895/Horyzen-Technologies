import React from 'react'
import './Who.css'
import growth from '../../Assets/growth.png'
import horyzen from '../../Assets/horyzen.jpeg'

const Who = () => {
  return (
        <section className="about-section">

      <div className="about-left">

        <div className="about-image-card">

          <div className="floating-badge-about">
            <img src={growth} alt="growth" />
            Building Future Innovators
          </div>

          <div className="about-image-placeholder">
            <img src={horyzen} alt="Horyzen Technologies"  className="who-image"/>
          </div>

        </div>

      </div>

      <div className="about-right">

        <span className="section-tag">
          WHO WE ARE
        </span>

        <h2 className="about-title">
          Transforming Ideas Into
          <span> Real-World Impact</span>
        </h2>

        <p className="about-description">
          Horyzen Technologies empowers students,
          startups, and businesses through practical
          learning, innovative software solutions,
          AI-powered applications, and industry-driven
          project experiences.

          We believe learning should create impact,
          innovation should solve problems, and
          technology should empower growth.
        </p>

        <div className="about-features">

          <div className="feature-card">
            <h4>Industry Projects</h4>
            <p>
              Work on real-world solutions that build
              practical skills and experience.
            </p>
          </div>

          <div className="feature-card">
            <h4>AI & Innovation</h4>
            <p>
              Building next-generation products powered
              by modern technology and AI.
            </p>
          </div>

          <div className="feature-card">
            <h4>Hands-On Learning</h4>
            <p>
              Learn by building projects that prepare
              you for real industry challenges.
            </p>
          </div>
            <div className="feature-card" id='extra-card'>
            <h4>AI & Innovation</h4>
            <p>
              Building next-generation products powered
              by modern technology and AI.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Who