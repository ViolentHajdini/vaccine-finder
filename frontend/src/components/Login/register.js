import React, { useState, useContext }   from 'react'
import './common.css'
import { AccountContext } from './accountContext'
import Calendar from 'react-calendar'

const Register = () => {
    const [month, setMonth] = useState('')
    const [day, setDay] = useState('')
    const [year, setYear] = useState('')

    const updateDay = (e) =>{
        console.log(e.target.value.length)
        
        if (e.target.value <= 31 && e.target.value >= 0){
            setDay(e.target.value)
        }
    }




    const { switchToSignin } =useContext(AccountContext);
    return (
        <div className="boxContainer">
            <form className="FormContainer">
                <input className="Input" type="name" placeholder="Name"/>
                <input className="Input" type="surname" placeholder="Surname"/>
                <input className="Input" type="email" placeholder="Email"/>
                <input className="Input" type="password" placeholder="Password"/>
                <input className="Input" type="address" placeholder="Address"/>
                <input className="Input" type="number" placeholder="Zip Code"/>
                <div className="Date">
                    <input className="dateType" min="1" max="31" type="number" onChange={updateDay} placeholder="dd" value={day}></input>
                    <input className="dateType" min="1" max="31" type="number" onChange={setMonth} placeholder="mm"></input>
                    <input className="dateType" min="1800" max="2021" type="number" onChange={setYear} placeholder="yyyy"></input>
                    {console.log(day)}
                </div>
            </form>    
            <button className="submitButton" type="submit">Sign Up</button>
            <div className="bottomWrapper" style={{paddingBottom:'2em'}}>
                <h5 className='bottomText'>Already Registered?</h5> <h4 className={'switchButton'} onClick={ switchToSignin }>Log in</h4>
            </div>
        </div>
    )
}

export default Register
