import React from 'react'
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import './Statistics.css'


const stats = [
  {
    number: 50,
    suffix: "+",
    label: "Projects Delivered",
  },

  {
    number: 100,
    suffix: "+",
    label: "Students Trained",
  },

  {
    number: 95,
    suffix: "%",
    label: "Success Rate",
  },

  {
    number: 10,
    suffix: "+",
    label: "Technologies Mastered",
  },
];


const Statistics = () => {
     const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
      <section className="statistics-section" ref={ref} id='about'>

      <div className="section-header">

        <span className="section-tag">
          OUR ACHIEVEMENTS
        </span>

        <h2 className="section-title">
          Delivering Measurable Results
        </h2>

        <p className="section-description">
          Numbers tell a story. Our journey is built on
          innovation, impact, and real-world success.
        </p>

      </div>

      <div className="stats-grid">

        {stats.map((item, index) => (

          <div key={index} className="stat-card">

            <h3>

              {inView && (
                <CountUp
                  start={0}
                  end={item.number}
                  duration={3}
                />
              )}

              {item.suffix}

            </h3>

            <p>{item.label}</p>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Statistics