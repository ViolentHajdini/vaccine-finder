import React, { useState } from 'react'
import Appointment from './appointment.js'
import FindComponent from './findComponent';
import './findVaccine.css'
import axios from 'axios'
import Loading from './loading.js'
import { useDispatch, useSelector} from 'react-redux'
import { ADD_VACCINE_SITES_DATA } from '../../redux/userReducer'

const FindVaccine = () => {
    const dispatch = useDispatch()
    const [zipCode, setZipCode] = useState("")
    const vaccinationSites = useSelector(state => state.userReducer.vaccineSitesData)
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
            dispatch({type: ADD_VACCINE_SITES_DATA, vaccineSitesData: res.data })
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
                {Array.from(vaccinationSites.map(site => <FindComponent site={site} />))}
                
            </div>
        </div>
    )
}

export default FindVaccine