import React from 'react'
import { useSelector } from 'react-redux'


const Userlogged = () => {
const nameSelector = useSelector(state=>state.userReducer)

    return (
        <div className="name-wrapper">
            <i class="fas fa-users"></i> {nameSelector.name}
        </div>
    )
}

export default Userlogged
