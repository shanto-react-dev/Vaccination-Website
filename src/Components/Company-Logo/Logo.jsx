import React from 'react'
import '../Company-Logo/Logo.css'

const Logo = () => {
  return (
    <>
      <div className="logo">
        <div className="container">
          <div className="logo-area">
            <div className="logo-img">
              <img src="../public/img/p1.png" alt="company" />
            </div>
            <div className="logo-img">
              <img src="../public/img/p2.png" alt="company" />
            </div>
            <div className="logo-img">
              <img src="../public/img/p3.png" alt="company" />
            </div>
            <div className="logo-img">
              <img src="../public/img/p4.png" alt="company" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Logo