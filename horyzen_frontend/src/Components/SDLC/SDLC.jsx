import React from 'react'
import './SDLC.css'


const phases = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understanding business goals, requirements, and project scope.",
  },

  {
    number: "02",
    title: "Planning",
    description:
      "Defining architecture, technology stack, timelines, and resources.",
  },

  {
    number: "03",
    title: "Design",
    description:
      "Creating user-centric UI/UX designs and system workflows.",
  },

  {
    number: "04",
    title: "Development",
    description:
      "Building scalable applications using modern technologies.",
  },

  {
    number: "05",
    title: "Testing",
    description:
      "Ensuring quality, security, performance, and reliability.",
  },

  {
    number: "06",
    title: "Deployment",
    description:
      "Launching solutions into production environments.",
  },

  {
    number: "07",
    title: "Maintenance",
    description:
      "Continuous monitoring, updates, and optimization.",
  },
];


const SDLC = () => {
  return (
      <section className="sdlc-section">

      <div className="section-header">

        <span className="section-tag">
          SOFTWARE DEVELOPMENT LIFECYCLE
        </span>

        <h2 className="section-title">
          How We Build Digital Solutions
        </h2>

        <p className="section-description">
          Every successful product follows a structured process.
          Our SDLC ensures quality, scalability, and business impact.
        </p>

      </div>

      <div className="timeline">

        {phases.map((phase, index) => (
          <div key={index} className="timeline-card">

            <span className="phase-number">
              {phase.number}
            </span>

            <h3>{phase.title}</h3>

            <p>{phase.description}</p>

          </div>
        ))}

      </div>

    </section>
  )
}

export default SDLC