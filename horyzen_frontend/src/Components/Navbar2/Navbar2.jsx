import React from 'react'
import './Navbar2.css'
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

import HoryzenLogo from "../../Assets/Web_logo.png";


const Navbar2 = () => {
      const [sticky, setSticky] = useState(false);
      const navigate = useNavigate();
      
          useEffect(() => {
            const handleScroll = () => {
              setSticky(window.scrollY > 40);
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
          }, []);
  return (
    <div className={`navbar2 ${sticky ? "dark_nav" : ""}`}>
                        <button className='back-btn' onClick={() => navigate(-1)}>
                <FaArrowLeft /> 
                </button>
              <div className="auth-header2">

                   <img src={HoryzenLogo} alt="HoryzenLogo" className="logo" id="web-logo" />
                <h1>
                    HORYZEN TECHNOLOGIES
                </h1>
              </div>
    </div>
  )
}

export default Navbar2