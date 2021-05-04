import React from 'react'
import { useDispatch } from 'react-redux'
import './findComponent.css'
import { ADD_APPOINTMENT } from '../../redux/appointmentReducer'

const FindComponent = (props) => {
    const dispatch = useDispatch()

    if (!props.site) {
        return <div></div>
    }

    const { name, phoneNumber, scheduleByPhoneOnly, vaccine, address, directionsUrl, appointmentUrl } = props.site

    const handleScheduleAppointment = (e) => {
        e.preventDefault()
        dispatch({
            type: ADD_APPOINTMENT, appointment: {
                vaccine: vaccine,
                vaccinationSite: name,
                vaccinationSiteNumber: phoneNumber,
            }
        })

    }

    return (
        <div className="finder-wrapper">
            <div className="text-wrapper">
                <h1 className="h1-hospital">{name}</h1>
                <h3 className="type-address">{address}</h3>
                <h1 className="available-text">Vaccine Avaliable!</h1>
                <h1 className="type-vaccine">Type of Vaccine: {vaccine}</h1>
                <h1 className="type-vaccine">Phone Number: {phoneNumber != "" ? phoneNumber : 'N/A'}</h1>
            </div>
            <div className="button-wrapper">
                <button className="reserve-button" onClick={(e) => handleScheduleAppointment(e)}>
                    <div className="react-wraper">
                        <i class="far fa-calendar-check"></i>
                        <a href={appointmentUrl}>{scheduleByPhoneOnly ? 'Schedule Appointment: Phone Calls Only' : 'Schedule Appointment'}</a>
                    </div>
                </button>
                <button className="reserve-button">
                    <div className="react-wraper">
                        <i class="far fa-calendar-check"></i>
                        <a href={directionsUrl}>Directions</a>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default FindComponent
