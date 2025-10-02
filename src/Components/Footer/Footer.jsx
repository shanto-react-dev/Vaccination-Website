import React from 'react'
import '../Footer/Footer.css'
import { Link } from 'react-router'
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { IoPaperPlaneOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="container">
                <div className="footer-area">
                    <div className="footer-part">
                        <div className="footer-border">
                            <div className="footer-box">
                                <div className="footer-head">
                                    <h2>Get a quote</h2>
                                    <p>Please do enter your email address below</p>
                                </div>
                                <div className="footer-input">
                                    <input type="email" placeholder='lenux.ng@gmail.com' />
                                    <Link to={'/'}>
                                        <IoPaperPlaneOutline />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-end">
                        <div className="footer-logo">
                            <img src="../public/img/logo.png" alt="footer" />
                        </div>
                        <div className="footer-menu">
                            <ul>
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/'}>Services</Link></li>
                                <li><Link to={'/'}>Schedule</Link></li>
                                <li><Link to={'/'}>Contact us</Link></li>
                            </ul>
                        </div>
                        <div className="footer-icon">
                            <div className="icon">
                                <AiOutlineYoutube />
                            </div>
                            <div className="icon">
                                <FaInstagram />
                            </div>
                            <div className="icon">
                                <CiTwitter />
                            </div>
                            <div className="icon">
                                <FiFacebook />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer