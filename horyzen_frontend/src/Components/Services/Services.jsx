import React from 'react'
import './Services.css'
import {
  FaCode,
  FaBrain,
  FaMobileAlt,
  FaRobot,
  FaChartLine,
  FaGraduationCap,
  FaPenNib,
  FaMicrochip,
  FaProjectDiagram,
} from "react-icons/fa";


const services = [
  {
    title: "Web Development",
    icon: <FaCode />,
    description:
      "Modern websites and scalable web applications built with cutting-edge technologies.",
  },

  {
    title: "AI Solutions",
    icon: <FaBrain />,
    description:
      "AI-powered applications, chatbots, automation, and intelligent business systems.",
  },

  {
    title: "Mobile Development",
    icon: <FaMobileAlt />,
    description:
      "Cross-platform mobile apps designed for performance and user experience.",
  },

  {
    title: "Automation",
    icon: <FaRobot />,
    description:
      "Business process automation that increases productivity and reduces costs.",
  },

  {
    title: "Consulting",
    icon: <FaChartLine />,
    description:
      "Technology strategy, architecture planning, and business transformation guidance.",
  },

  {
    title: "Internships & Training",
    icon: <FaGraduationCap />,
    description:
      "Hands-on learning programs focused on real-world projects and industry skills.",
  },
    {
    title: "Graphics Designing",
    icon: <FaPenNib />,
    description:
      "Creating visually stunning designs for digital and print media, including branding, marketing materials, and user interfaces.",
  },
      {
    title: "Machine Learning",
    icon: <FaMicrochip />,
    description:
      "Building predictive models and intelligent systems that learn from data to drive insights and automation across various industries.",
  },
      {
    title: "UI/UX Design",
    icon: <FaProjectDiagram />,
    description:
      "Designing intuitive and engaging user interfaces and experiences that enhance usability and drive user satisfaction across digital platforms.",
  },
];

const Services = () => {
  return (
    <section className="services-section" id='services'>

      <div className="section-header">

        <span className="section-tag">
          OUR SERVICES
        </span>

        <h2 className="section-title">
          Solutions Designed For Growth
        </h2>

        <p className="section-description">
          From innovative software development to AI-powered
          automation and industry-focused training, we help
          businesses and students achieve measurable success.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service, index) => (
          <div key={index} className="service-card">

           <div className="serviceiconandname">
            <div className="service-icon">
              {service.icon}
              
            </div>
             <h3>{service.title}</h3>
           </div>


           

            <p>{service.description}</p>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Services