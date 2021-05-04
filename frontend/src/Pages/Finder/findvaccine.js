import React, { useState } from 'react'
import Appointment from './appointment.js'
import FindComponent from './findComponent';
import './findVaccine.css'
import axios from 'axios'
import Loading from './loading.js'
import { useDispatch, useSelector} from 'react-redux'
import { ADD_VACCINE_SITES_DATA } from '../../redux/userReducer'
import { VACCINE_REQUEST, VACCINE_REQUEST_SUCCESS, VACCINE_REQUEST_FAIL } from '../../redux/vaccineReducer'
const FindVaccine = () => {
    const dispatch = useDispatch()
    const [zipCode, setZipCode] = useState("")
    const vaccinationSites = useSelector(state => state.vaccineReducer)
    const { loading, vaccineData, error } = vaccinationSites
 
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: VACCINE_REQUEST })
        axios.get("http://localhost:5000/vaccineSites/locations", {
            params: {
                zipCode: zipCode
            }
        }).then(res => {
            dispatch({ type: VACCINE_REQUEST_SUCCESS, payload: res.data })
        }).catch(err => {
            dispatch({ type: VACCINE_REQUEST_FAIL, error: err })
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
                {   loading 
                    ?  <div className="loader-wrapper"><Loading/></div>
                    :   vaccineData.map(site => <FindComponent site={site} />)
                }
                
            </div>
        </div>
    )
}

export default FindVaccine