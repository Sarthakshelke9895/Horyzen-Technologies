import React from 'react'
import {
  FaRocket,
  FaBrain,
  FaUsers,
  FaCode,
  FaHandshake,
  FaChartLine
} from "react-icons/fa";
import './Why.css'

const reasons = [
  {
    icon: <FaRocket />,
    title: "Industry-Focused Solutions",
    description:
      "We create solutions aligned with real-world business requirements and industry standards.",
  },

  {
    icon: <FaBrain />,
    title: "AI-Driven Innovation",
    description:
      "Leveraging modern AI technologies to automate processes and create smarter applications.",
  },

  {
    icon: <FaUsers />,
    title: "Dedicated Mentorship",
    description:
      "Guidance from experienced professionals throughout development and learning journeys.",
  },

  {
    icon: <FaCode />,
    title: "Hands-On Experience",
    description:
      "Real projects, practical implementation, and industry-relevant development workflows.",
  },

  {
    icon: <FaHandshake />,
    title: "Client-Centric Approach",
    description:
      "Every solution is tailored to meet unique business goals and customer expectations.",
  },

  {
    icon: <FaChartLine />,
    title: "Scalable Growth",
    description:
      "Building future-ready systems that evolve with your business and technology needs.",
  },
];

const Why = () => {
  return (
    <section className="why-section" id='why'>

      <div className="section-header">

        <span className="section-tag">
          WHY CHOOSE HORYZEN
        </span>

        <h2 className="section-title">
          Your Growth Partner In Technology
        </h2>

        <p className="section-description">
          We combine innovation, mentorship, and technical excellence
          to deliver solutions that create measurable impact.
        </p>

      </div>

      <div className="why-grid">

        {reasons.map((item, index) => (
          <div className="why-card" key={index}>

            <div className="why-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Why