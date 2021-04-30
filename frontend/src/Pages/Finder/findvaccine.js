import React from 'react'
import FindComponent from './findComponent';
import './findVaccine.css'

const Findvaccine = () => {
    return (
        <div className="find-container">
            <div className="find-wrapper">
                <div className="input-wrapper"> 
                    <input className="input-div" type='text' placeholder="Search ddress or ZIP"></input><button className="button-input">Search</button>    
                </div>
                <h1 className="h1-holder">Sites Available for appointment: </h1>
                <FindComponent/>
                <FindComponent/>
                <FindComponent/>
            </div>
        </div>
    )
}

export default Findvaccine
