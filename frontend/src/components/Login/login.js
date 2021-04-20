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

                            {/* <input type='name' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            <input type='name' placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                            <input type='email' placeholder="Email"value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type='password' placeholder="Password"value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button type='submit' className="submit_button"> Submit </button> */}