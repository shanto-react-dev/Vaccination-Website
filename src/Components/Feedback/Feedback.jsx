import React from 'react'
import '../Feedback/Feedback.css'

const Feedback = () => {
  return (
    <>
        <div className="feedback">
            <div className="container">
                <div className="feedback-area">
                    <div className="feedback-text">
                        <h4>FEEDBACK</h4>
                        <h1>What our Patients Think</h1>
                        <p>Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit. Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.</p>
                    </div>
                    <div className="feedback-part">
                        <div className="feedback-bg-img">
                            <div className="feedback-box">
                                <div className="feedback-info">
                                    <div className="feedback-img">
                                        <img src="../public/img/Rectangle-25.png" alt="person" />
                                    </div>
                                    <div className="feedback-name">
                                        <h2>Oyindamola Maja</h2>
                                        <h5>Badagry, Lagos</h5>
                                    </div>
                                </div>
                                <div className="feedback-para">
                                    <p>“Been stressing about a close centre to get the <span>covid-19</span> vaccine, until i tried Vaccination.ng" </p>
                                </div>
                            </div>
                        </div>
                        <div className="feedback-bg-img">
                            <div className="feedback-box-1">
                                <div className="feedback-info">
                                    <div className="feedback-img">
                                        <img src="../public/img/Rectangle-24.png" alt="person" />
                                    </div>
                                    <div className="feedback-name-1">
                                        <h2>Okeowo Lekan</h2>
                                        <h5>Ikeja, Lagos</h5>
                                    </div>
                                </div>
                                <div className="feedback-para-1">
                                    <p>“Got my vaccine very close to my house. Was very easy scheduling an appointment.” </p>
                                </div>
                            </div>
                        </div>
                        <div className="feedback-bg-img">
                            <div className="feedback-box">
                                <div className="feedback-info">
                                    <div className="feedback-img">
                                        <img src="../public/img/Rectangle-26.png" alt="person" />
                                    </div>
                                    <div className="feedback-name">
                                        <h2>Kafaru Temitope</h2>
                                        <h5>Obanikoro, Lagos</h5>
                                    </div>
                                </div>
                                <div className="feedback-para">
                                    <p>“Been stressing about a close centre to get the <span>covid-19</span> vaccine, until i tried Vaccination.ng" </p>
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

export default Feedback