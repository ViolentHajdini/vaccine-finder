import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import { useSelector } from 'react-redux';
import Userlogged from './userlogged';


const Nav = () => {


    const userSelector = useSelector(state=>state.userReducer)

    return (

        <div className="nav-wrapper">
            {console.log(userSelector.isLoggedIn)}
            <Link target="_self" to="/">
                <div className="nav-logo">Vaccine Finder</div>
            </Link>
            <div className="nav-container">
                <Link target='_self' to="/findvaccine">
                    <div className="find-vaccine">Find Vaccines</div>
                </Link>
                {userSelector.isLoggedIn ? <Userlogged/> : <Link target="_self" to="/signUp"> <button className="Login">Log In</button> </Link> }
            </div>
        </div>
    )
}

export default Nav