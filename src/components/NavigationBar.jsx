import React, { useEffect, useState } from 'react'
import "../styles/Navbar.css"
import { NavLink } from 'react-router-dom'
import { IoHome, IoSettings } from "react-icons/io5"
import { FaNoteSticky } from "react-icons/fa6"
import { RiTestTubeFill } from 'react-icons/ri'

const NavigationBar = () => {
    const [hideNav, setHideNav] = useState(false);

    //automatically hides the navbar if not scrolled for 4s
    useEffect(() => {
        if (!hideNav) {
            let isScrolling = setTimeout(() => {
                if (!hideNav) {
                    setHideNav(true)
                    clearTimeout(isScrolling)
                }
            }, 4000)
        }
    }, [hideNav])

    //shows nav bar when scrolling up and hides it when scrolling down
    useEffect(() => {
        window.onscroll = function (e) {
            if (this.oldScroll > this.scrollY) {
                setHideNav(false)
            }
            else {
                setHideNav(true)
            }
            this.oldScroll = this.scrollY;
        }
    }, []);

    return (
        <nav className={hideNav ? 'nav-hidden' : ''}>
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