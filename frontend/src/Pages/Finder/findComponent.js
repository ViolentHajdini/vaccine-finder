import React from 'react'
import './findComponent.css'

const FindComponent = () => {
    return (
        <div className="finder-wrapper">
            <div className="text-wrapper">
                <h1 className="h1-hospital">Name of Hospital</h1>
                <h3 className="type-hospital">#MS1000363</h3>
                <h3 className="type-address">312 W 14th StNew York, NY 10014</h3>
                <h1 className="type-hospital">Find out if you can get a COVID-19 vaccine at this location.</h1>
                <h1 className="available-text">FIRST DOSE APPOITMENT AVALIABLE!</h1>
                <h1 className="type-vaccine">Type of Vaccine: Pfizer</h1>
            </div>
            <div className="button-wrapper">
                <button className="reserve-button">
                    <div className="react-wraper">
                        <i class="far fa-calendar-check"></i>
                        Scheduele Appointment
                    </div>
                </button>
                <button className="call-button">
                    <div className="call-wrapper">
                        <i class="fas fa-phone-alt"></i>
                        Call for information    
                    </div>
                </button>
            </div>
        </div>
    )
}

export default FindComponent
