 import React, { useState, useEffect } from 'react'
 import './component.css'
 import Login from './login'
 import Register from './register';
 import { motion } from "framer-motion";
 import { AccountContext } from './accountContext';

 const Component = (props) => {


    const [name,setName] =useState('');
    const [surname,setSurname] =useState('');
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');


    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState('Signin');

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(()=> {
            setExpanded(false);
        },expandingTransition.duration * 1000 - 1500);
    };

    const switchToRegister = () => {
        playExpandingAnimation();
        setTimeout(() =>{
            setActive("Register")
        }, 400);
    }

    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() =>{
            setActive("Signin")
        }, 400);
    }

    const contextValue = { switchToSignin, switchToRegister };

    const backdropVariants = {
        expanded: {
            width: "233%",
            height: "1750px",
            borderRadius: "20%",
            transform: "rotate(0deg)"
        },
        collapsed: {
            width: "160%",
            height: "550px",
            borderRadius: "50%",
            transform: "rotate(30deg)"
        }
    }

    const expandingTransition = {
        type: "spring",
        duration: 2.1,
        stiffness: 30,
    }
     return (
         <AccountContext.Provider value={contextValue}> 
         <div className="componentWrapper">
            <div className="Image"><div className="ImageColor"/><h1 className="logo">VACCINE FINDER</h1></div>
            <div className='login-wrapper'>
                <motion.div initial={false} transition={expandingTransition} variants={backdropVariants} className='login-container'>
                    <motion.div className='drop' initial={false} animate={isExpanded? "expanded" : "collapsed"} variants={backdropVariants} transition={expandingTransition} />
                        {active ==='Signin' && <div className='login_form'>
                            <h2 className="medium-text">Welcome to</h2>
                            <h2 className="medium-text">Vaccine Center</h2>
                            <h5 className="small-text">Please log-in to continue</h5> 
                        </div>}
                        {active ==='Register' && <div className='login_form'>
                            <h2 className="medium-text" style={{marginTop:"1.2em"}}>Create Account</h2>
                            <h2 className="medium-text">Account</h2>
                            <h5 className="small-text">Please Register to continue</h5> 
                        </div>}
                </motion.div>
                <div className="innerContainer">
                    {active === 'Signin' && <Login/>}
                    {active === 'Register' && <Register/>}
                </div>
            </div> 
         </div>
         </AccountContext.Provider>
     )
 }
 
 export default Component