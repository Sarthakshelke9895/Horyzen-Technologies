import React from 'react'
import { useState } from "react";
import './Contact.css'

const Contact = () => {
      const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.target);

    formData.append(
      "access_key",
      "b8e0ac71-fede-41d5-9f1f-0452b45e5eab"
    );

    const object = Object.fromEntries(
      formData.entries()
    );

    const json = JSON.stringify(object);

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }
    );

    const result = await response.json();

    setLoading(false);

    if (result.success) {

      setSuccess(true);

      e.target.reset();

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    }
  };

  return (
     <section className="contact-section" id='contact'>

      {success && (
        <div className="success-alert">
          ✓ Message Sent Successfully
        </div>
      )}

      <div className="contact-container">

        {/* LEFT */}

        <div className="contact-left">

          <span className="section-tag">
            CONTACT US
          </span>

          <h2>
            Let's Build Something Amazing Together
          </h2>

          <p>
            Feel free to reach out to us.
            Whether you're a student,
            startup, or business,
            we're ready to help bring
            your ideas to life.
          </p>

          <div className="map-card">

            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.820039978723!2d73.82379471122243!3d18.44647827135994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29524cd155465%3A0x30056a1b47feef41!2sZeal%20College%20Chowk%2C%20Mokarwadi%2C%20Narhe%2C%20Pune%2C%20Maharashtra%20411041!5e0!3m2!1sen!2sin!4v1781091849883!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
            />

          </div>

        </div>

        {/* RIGHT */}

        <div className="contact-right">

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone Number"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email (Optional)"
              />
            </div>

            <div className="form-group">
              <textarea
                rows="6"
                name="message"
                required
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
            >

              {loading ? (
                <>
                  <div className="spinner"></div>
                  Sending...
                </>
              ) : (
                "Send Enquiry"
              )}

            </button>

          </form>

        </div>

      </div>

    </section>
  )
}

export default Contact