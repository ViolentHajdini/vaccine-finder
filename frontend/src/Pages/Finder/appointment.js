import React from 'react'
import './appointment.css'

const Appointment = () => {
    return (
        <div className="appointment-wrapper">
            <div className="appointment-container"> 
                <h1 className="reminder-container">Upcoming appointment for Covid Vaccine Type: </h1>
                <h1 className="scheduled-container">Scheduled for 05/07/2021 </h1>
            </div>           
        </div>
    )
}

export default Appointment
