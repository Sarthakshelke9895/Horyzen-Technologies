import React from "react";

import growth from '../../Assets/growth.png'
import work from '../../Assets/work.png'
import scale from '../../Assets/scale.png'
import './Hero.css'
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">

        <div className="hero-left">

          <span className="hero-badge">
            <img src={growth} alt="growth" id="growth" />
            Empowering Students & Businesses
          </span>

          <h1 className="hero-title">
            Start Building Together with{" "}
            <span className="horyzen-text">HORYZEN</span>
          </h1>

          <p className="hero-description">
            We bridge the gap between learning and industry by providing
            internships, real-world projects, AI solutions, software
            development, and consulting services.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">
              View Portfolio
            </button>

            <button className="btn btn-secondary">
              View Services
            </button>

            <button className="btn btn-outline">
              Book Consultation
            </button>
          </div>

        </div>

        <div className="hero-right">

          <div className="vision-wrapper">

            <div className="floating-badge top-badge">
              <img src={work} alt="growth" />
              Work on Industry Projects
            </div>

            <div className="vision-card">

              <div className="card-section">
                <span className="card-label">OUR VISION</span>
                <h3>Building Future Innovators</h3>
                <p>
                  Creating a world where technology, education and innovation
                  work together to unlock opportunities.
                </p>
              </div>

              <div className="divider"></div>

              <div className="card-section">
                <span className="card-label">OUR MISSION</span>
                <h3>Learn. Build. Grow.</h3>
                <p>
                  Deliver practical experience, real projects,
                  AI solutions and consulting that create impact.
                </p>
              </div>

            </div>

            <div className="floating-badge bottom-badge">
              <img src={scale} alt="growth" />
              Scale with Horyzen
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Hero