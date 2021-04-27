import React, { useContext }   from 'react'
import './common.css'
import { AccountContext } from './accountContext'

const Login = (props) => {
    const { switchToRegister } =useContext(AccountContext);
    return (
        <div className="boxContainer">
            <form className="FormContainer">
                <input className="Input" type="email" placeholder="Email"/>
                <input className="Input" type="password" placeholder="Password"/>
            </form>    
            <button className="submitButton" type="submit">Log In</button>
            <div className="bottomWrapper"> 
                <h5 className="bottomText">Dont have an account?</h5><h4 className={'switchButton'} onClick={switchToRegister}>Sign up</h4>
            </div>
        </div>
    )
}

export default Login

                           