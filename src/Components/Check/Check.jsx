import React from 'react'
import '../Check/Check.css'
import { Link } from 'react-router'

const Check = () => {
  return (
    <>
      <div className="check">
        <div className="container">
          <div className="check-area">
            <div className="check-box">
              <div className="check-upper">
                <div className="check-head">
                  <h3>Check your COVID-19 result on our Database</h3>
                </div>
              </div>
              <div className="check-down">
                <div className="check-input">
                  <input type="text" placeholder='NIK Name' />
                  <input type="number" placeholder='NIK Number' />
                  <div className="button3">
                    <Link to={'/'}>Check</Link>
                  </div>
                </div>
                <div className="check-button">
                  <Link to={'/'}>Need a certificate for your COVID-19 result? Please click here</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Check