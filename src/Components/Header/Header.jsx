import React from 'react'
import '../Header/Header.css'
import { Link } from 'react-router'
import { LuClock } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { FaShieldAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <>
        <div className="header">
          <div className="container">
            <div className="header-area">
              <div className="header-logo">
                <img src="/img/logo.png" alt="logo" />
              </div>
              <div className="header-menu">
                <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/'}>Services</Link></li>
                  <li><Link to={'/'}>Schedule</Link></li>
                  <li><Link to={'/'}>Contact us</Link></li>
                </ul>
              </div>
              <div className="header-button">
                <Link to={'/'}>Check Status</Link>
              </div>
            </div>
            <div className="banner-area">
              <div className="banner-texts">
                <h3>Get Vaccinated. Boost your Immune System</h3>
                <h1>COVID-19 Vaccination Got Easier With, <Link to={'/'}>Vaccination.ng</Link></h1>
                <p>Vaccination.ng will help you find the nearest centre for vaccination, in all 36 states in Nigeria.</p>
                <div className="button1">
                  <Link to={'/'}>Get Vaccine</Link>
                  <Link to={'/'}>Help Centre</Link>
                </div>
              </div>
              <div className="banner-img">
                <img src="/img/group22.png" alt="banner" />
              </div>
            </div>
            <div className="time-area">
              <div className="time-name">
                <div className="time-icon">
                  <LuClock />
                </div>
                <div className="time-head">
                  <h4>Schedule your Vaccination</h4>
                </div>
              </div>
              <div className="time-see">
                <div className="time-info">
                  <div className="time-box">
                    <div className="time-icon1">
                      <IoLocationOutline />
                    </div>
                    <div className="time-text1">
                      <h4>Location</h4>
                      <p>Ikeja Lagos, Nigeria</p>
                    </div>
                  </div>
                  <div className="time-box">
                    <div className="time-icon1">
                      <CiCalendar />
                    </div>
                    <div className="time-text1">
                      <h4>Date</h4>
                      <p>29 February, 2022</p>
                    </div>
                  </div>
                  <div className="time-box">
                    <div className="time-icon1">
                      <FaShieldAlt />
                    </div>
                    <div className="time-text1">
                      <h4>Vaccine Type</h4>
                      <p>Mordena</p>
                    </div>
                  </div>
                </div>
                <div className="time-button2">
                  <Link to={'/'}>Submit</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Header