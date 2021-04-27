import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className="home-wrapper">

            <div className="info-container">
                <div className="img-wrapper"/>
                <div className="text-container">
                    <h1 className="header-container">VaccineFinder helps you find clinics, pharmacies, and other locations that offer COVID-19 vaccines in the United States.</h1>
                    <p className="paragraph-container">In some states, information is limited while more providers and pharmacies update locations in the coming weeks. COVID-19 vaccine availability is limited, and appointments are required at most locations.</p>
                    <Link target='_self' to='/findVaccine'><button className="find-button">Find Vaccine</button></Link>
                    
                </div>
            </div>
            <div className="bullshit">
                <div className="tag"/><h3 className="header-c">Will VaccineFinder tell me if I am eligible to get the Vaccine?</h3>
                <h5 className="header-p">No. Eligibility requirements vary by state. Visit the CDC website  to find your local health department to see if you are eligible to get the vaccine.</h5>  
                <div className="tag"/><h3 className="header-c">Can I book my vaccine appointment through VaccineFinder?</h3>
                <h5 className="header-p">No. VaccineFinder shows you locations that have available COVID-19 vaccines. VaccineFinder will provide you with a link to schedule the appointment through the location’s website or with a phone number to call to make an appointment.</h5>
                <div className="tag"/><h3 className="header-c">How often is VaccineFinder updated?</h3>
                <h5 className="header-p">VaccineFinder is updated daily.</h5>
                <div className="tag"/><h3 className="header-c">Who created VaccineFinder?</h3>
                <h5 className="header-p">VaccineFinder is operated by Boston Children's Hospital and supported by the Centers for Disease Control and Prevention and the United States Digital Service.</h5>         
            </div>

            <div className="second-container">
                <div className="bot-nav-wrapper">    
                    <h3 className="header-bot">We want to make vaccination easy and accessible to everyone.</h3>
                    <h5 className="nav-bot">VaccineFinder is a free service where users can search for locations that offer vaccinations. We work with partners such as clinics, pharmacies and health departments to provide accurate and up-to-date information about vaccination services. VaccineFinder is operated by epidemiologists and software developers at Boston Children’s Hospital and supported by the Centers for Disease Control and Prevention and the United States Digital Service. VaccineFinder is temporarily suspending information on flu and routine vaccination services. Call your healthcare provider or department of health if you are in need of a flu or routine vaccine.</h5>  
                </div>
            </div>

            <div className="nav-bottom">

            </div>
            
        </div>
    )
}

export default Home
