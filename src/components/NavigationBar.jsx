import React from 'react'
import "../styles/Navbar.css"
import { NavLink } from 'react-router-dom'
import { IoHome, IoSettings } from "react-icons/io5"
import { FaNoteSticky } from "react-icons/fa6"
import { RiTestTubeFill } from 'react-icons/ri'

const NavigationBar = () => {
    return (
        <nav className=''>
            <NavLink to="/" className="nav-link">
                <IoHome />
                Home
            </NavLink>
            <NavLink to="/lab-tests" className="nav-link">
                <RiTestTubeFill />
                Lab Tests
            </NavLink>
            <NavLink to="/letter" className="nav-link">
                <FaNoteSticky />
                Letter
            </NavLink>
            <NavLink to="/settings" className="nav-link">
                <IoSettings />
                Settings
            </NavLink>
        </nav>
    )
}

export default NavigationBar