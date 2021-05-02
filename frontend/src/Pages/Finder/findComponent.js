import React from 'react'
import './findComponent.css'

const FindComponent = (props) => {
    if(!props.site){
        return <div></div>
    }

    const { name, phoneNumber, scheduleByPhoneOnly, vaccine, address, directionsUrl, appointmentUrl} = props.site

    return (
        <div className="finder-wrapper">
            <div className="text-wrapper">
                <h1 className="h1-hospital">{name}</h1>
                <h3 className="type-address">{address}</h3>
                <h1 className="available-text">Vaccine Avaliable!</h1>
                <h1 className="type-vaccine">Type of Vaccine: {vaccine}</h1>
            </div>
            <div className="button-wrapper">
                <button className="reserve-button">
                    <div className="react-wraper">
                        <i class="far fa-calendar-check"></i>
                        <a href={appointmentUrl}>Schedule Appointment</a>
                    </div>
                </button>
                <button className="reserve-button">
                    <div className="react-wraper">
                        <i class="far fa-calendar-check"></i>
                        <a href={directionsUrl}>Directions</a>
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
