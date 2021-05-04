import React, { useState } from 'react'
import Appointment from './appointment.js'
import FindComponent from './findComponent';
import './findVaccine.css'
import axios from 'axios'
import Loading from './loading.js'

const FindVaccine = () => {
    const [zipCode, setZipCode] = useState("")
    const [vaccinationSites, setVaccininationSites] = useState([])
    //const [loader, setLoader] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        //setLoader(true)
        axios.get("http://localhost:5000/vaccineSites/locations", {
            params: {
                zipCode: zipCode
            }
        }).then(res => {
            //setLoader(false)
            setVaccininationSites(res.data)
        })
    }

    return (
        <div className="find-container">
            <Appointment/>
            <div className="find-wrapper">
                <div className="input-wrapper">
                    <input className="input-div" type='text'
                        onChange={e => setZipCode(e.target.value)}
                        placeholder="Search by zipcode">
                    </input>
                    <button onClick={handleSubmit} className="button-input">Search</button>
                </div>
                {/* <div className="loader-wrapper"><Loading/></div>} */}
                {console.log('vs', vaccinationSites, typeof(vaccinationSites))}
                {Array.from(vaccinationSites.map(site => <FindComponent site={site} />))}
                
            </div>
        </div>
    )
}

export default FindVaccine