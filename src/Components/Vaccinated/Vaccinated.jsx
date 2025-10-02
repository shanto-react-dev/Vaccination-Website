import React from 'react'
import '../Vaccinated/Vaccinated.css'
import { LuUsers } from "react-icons/lu";
import { Link } from 'react-router';
import { FiArrowRight } from "react-icons/fi";
import { FaTemperatureFull } from "react-icons/fa6";
import { FaShieldAlt } from 'react-icons/fa';


const Vaccinated = () => {
  return (
    <>
        <div className="vaccinated">
            <div className="container">
                <div className="vaccinated-area">
                    <div className="vaccinated-head">
                        <h2>Why get vaccinated today?</h2>
                        <p>Magna adipiscing at elit at ornare lectus nibh lorem. Ac, sed ac lorem pellentesque vestibulum risus matti. In molestie condimentum malesuada non.</p>
                    </div>
                    <div className="vaccinated-border">
                        <div className="vaccinated-box-1">
                            <div className="vaccination-icon-1">
                                <FaShieldAlt />
                            </div>
                            <div className="vaccination-header-2">
                                <h3>Protects your immune system against viruses</h3>
                            </div>
                            <div className="vaccination-para">
                                <p>Velit ut consectetur mauris, orci amet, faucibus. Sit turpis fringilla ipsum pretium,dictum. Dolor eget vel nulla lorem ac.</p>
                            </div>
                            <div className="vaccination-more-1">
                                <Link to={'/'}>Read More</Link>
                                <div className="iconed-1">
                                    <FiArrowRight />
                                </div>
                            </div>
                        </div>
                        <div className="vaccinated-box">
                            <div className="vaccination-icon">
                                <LuUsers />
                            </div>
                            <div className="vaccination-header">
                                <h3>Minimize the spread of the Virus</h3>
                            </div>
                            <div className="vaccination-more">
                                <Link to={'/'}>Read More</Link>
                                <div className="iconed">
                                    <FiArrowRight />
                                </div>
                            </div>
                        </div>
                        <div className="vaccinated-box">
                            <div className="vaccination-icon">
                                <FaTemperatureFull />
                            </div>
                            <div className="vaccination-header-1">
                                <h3>Protect yourself</h3>
                            </div>
                            <div className="vaccination-more">
                                <Link to={'/'}>Read More</Link>
                                <div className="iconed">
                                    <FiArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Vaccinated
