import React from 'react'
import { useSelector } from 'react-redux'
import './appointment.css'

const Appointment = () => {
    const { vaccine, hasAppointmentScheduled, vaccinationSite, vaccinationSiteNumber } = useSelector(state => state.appointmentReducer)

    return (
        <div>{ hasAppointmentScheduled ? <div className="appointment-wrapper">
                <div className="appointment-container"> 
                    <h1 className="reminder-container">Upcoming appointment for Covid Vaccine Type: {vaccine} </h1>
                    <h1 className="scheduled-container">Location: {vaccinationSite} </h1>
                    <h1 className="scheduled-container">For more information check your email {vaccinationSiteNumber == "" ? "" : `or call ${vaccinationSiteNumber}`}  </h1>
                </div>           
            </div>
            : null
        }
        </div>
    )
}

export default Appointment
