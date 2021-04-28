import React, { useState, useContext }   from 'react'
import './common.css'
import { AccountContext } from './accountContext'
import axios from 'axios'

const Login = (props) => {
    const { switchToRegister } =useContext(AccountContext);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleOnSubmit = (e) => {
        axios.post("http://localhost:5000/users/login", {
            email: email,
            password: password
        }).then(res => {
            if(res.data.status){
                console.log("Login succcessful")
            }else{
                console.log("Wrong username or password")
            }
        })
    }

    return (
        <div className="boxContainer">
            <form className="FormContainer" onSubmit={() => handleOnSubmit()}>
                <input onChange={e => setEmail(e.target.value)} className="Input" type="email" placeholder="Email"/>
                <input onChange={e => setPassword(e.target.value)} className="Input" type="password" placeholder="Password"/>
            </form>    
            <button className="submitButton" type="submit" onClick={handleOnSubmit}>Log In</button>
            <div className="bottomWrapper"> 
                <h5 className="bottomText">Don't have an account?</h5><h4 className={'switchButton'} onClick={switchToRegister}>Sign up</h4>
            </div>
        </div>
    )
}

export default Login

                           