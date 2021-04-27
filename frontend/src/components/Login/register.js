import React, { useState, useContext }   from 'react'
import './common.css'
import { AccountContext } from './accountContext'
import Calendar from 'react-calendar'

const Register = () => {
    const [month, setMonth] = useState('')
    const [day, setDay] = useState('')
    const [year, setYear] = useState('')
    const [name, setName] = useState('')
    const [last, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [number, setNumber] = useState('')
    const [zip, setZip] = useState('')

    

    const updateDay = (e) =>{
        if (e.target.value <= 31 && e.target.value >= 0){
            setDay(e.target.value)
        }
    }
    const updateYear = (e) =>{
        if (e.target.value <= 2021 && e.target.value >= 0){
            setYear(e.target.value)
        }
    }
    const updateMonth = (e) =>{
        if (e.target.value <= 12 && e.target.value >= 0){
            setMonth(e.target.value)
        }
    }

    const updateZip = (e) => {
        if(zip.length > 5 === false || e.target.value === '\b'){
            setZip(e.target.value)
        }
    }


    const { switchToSignin } =useContext(AccountContext);
    return (
        <div className="boxContainer">
            <form className="FormContainer">
                <input className="Input" type="name" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                <input className="Input" type="surname" placeholder="Surname" onChange={(e) => setLastname(e.target.value)}/>
                <input className="Input" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <input className="Input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <input className="Input" type="address" placeholder="Address" onChange={(e) => setAddress(e.target.value)}/>
                <input className="Input" type="number" placeholder="Zip Code" onChange={updateZip} value={zip}/>
                <div className="Date">
                    <input className="dateType" min="1" max="31" type="number" onChange={updateDay} placeholder="dd" value={day}></input>
                    <input className="dateType" min="1" max="12" type="number" onChange={updateMonth} placeholder="mm" value={month}></input>
                    <input className="dateType" min="1800" max="2021" type="number" onChange={updateYear} placeholder="yyyy" value={year}></input>
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

 {/* <input type='name' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            <input type='name' placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                            <input type='email' placeholder="Email"value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type='password' placeholder="Password"value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button type='submit' className="submit_button"> Submit </button> */}
