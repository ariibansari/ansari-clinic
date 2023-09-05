import React from 'react'
import Logo from './Logo'
import "../styles/Header.css"

const Header = () => {
    return (
        <section className='app-header'>
            <Logo className="logo" />
        </section>
    )
}

export default Header