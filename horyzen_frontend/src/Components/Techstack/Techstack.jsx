import React from 'react'
import './Techstack.css'
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaPython,
} from "react-icons/fa";

import {
  SiMongodb,
  SiNextdotjs,
  SiOpenai,
} from "react-icons/si";
const technologies = [
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "OpenAI", icon: <SiOpenai /> },
];

const Techstack = () => {
  return (
     <section className="tech-section">

      <div className="section-header">
        <span className="section-tag">
          TECHNOLOGY STACK
        </span>

        <h2 className="section-title">
          Powered By Modern Technologies
        </h2>

        <p className="section-description">
          We leverage industry-leading tools and
          technologies to build scalable, secure,
          and future-ready digital solutions.
        </p>
      </div>

      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-card">
            <div className="tech-icon">
              {tech.icon}
            </div>

            <h3>{tech.name}</h3>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Techstack