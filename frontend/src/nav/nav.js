import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const nav = () => {
    return (
        <div className="nav-wrapper">
            <Link target="_self" to="/">
                <div className="nav-logo">Vaccine Finder</div>
            </Link>
            <div className="nav-container">
                <div className="find-vaccine">Find Vaccines</div>
                <Link target="_self" to="/signUp">
                    <button className="Login">Log In</button>
                </Link>

            </div>
        </div>
    )
}

export default nav
