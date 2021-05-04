import React, { useState, useContext }   from 'react'
import './common.css'
import { AccountContext } from './accountContext'
import axios from 'axios'
import { ADD_USER } from '../../redux/userReducer'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

const Login = (props) => {
    const dispatch = useDispatch()
    const { switchToRegister } =useContext(AccountContext);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let history = useHistory();


    const handleOnSubmit = (e) => {
        axios.post("http://localhost:5000/users/login", {
            email: email,
            password: password
        }).then(res => {
            console.log(res.data)
            if(res.data.success){
                console.log("Login succcessful")
                dispatch({ type: ADD_USER, user: {
                    email: email,
                    name: res.data.name
                }})
                history.push('/findvaccine')
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

                           