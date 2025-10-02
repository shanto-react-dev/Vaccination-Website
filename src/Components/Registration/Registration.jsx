import React from 'react'
import '../Registration/Registration.css'
import { Link } from 'react-router'
import { FaAngleDown } from "react-icons/fa";

const Registration = () => {
  return (
    <>
        <div className="registration">
            <div className="container">
                <div className="registration-area">
                    <div className="registration-form">
                      <div className="registration-header">
                        <h2>Get your vaccine registration today</h2>
                      </div>
                      <div className="registration-name">
                        <h4>Patient’s Full Name</h4>
                        <input type="text" placeholder='Full name'/>
                      </div>
                      <div className="registration-number">
                        <h4>Mobile Number</h4>
                        <p>Notifications for appointment and reminders will be sent to this provided number</p>
                        <div className="verify">
                          <div className="flag">
                            <img src="/img/nigeria.png" alt="flag" />
                            <FaAngleDown />
                          </div>
                          <div className="line"></div>
                          <input type="number" placeholder='Phone Number'/>
                          <Link to={'/'}>Verify</Link>
                        </div>
                      </div>
                      <div className="registration-button">
                        <Link to={'/'}>Submit</Link>  
                      </div> 
                      <div className="registration-chk">
                        <h3>Already registered ? </h3>
                        <Link to={'/'}>Check your status</Link>
                      </div> 
                    </div>
                    <div className="registration-img">
                      <img src="/img/Group-45.png" alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Registration