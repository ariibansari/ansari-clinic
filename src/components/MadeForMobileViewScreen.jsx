import React from 'react'
import { useState } from 'react'
import '../styles/MadeForMobileViewScreen.css'
import '../styles/SplashScreen.css'
import Button from './Button'
import Logo from './Logo'

const MadeForMobileViewScreen = () => {
    const [isVisible, setIsVisible] = useState(true)

    return (
        <section id="made-for-mobile-only" className={`${isVisible ? 'visible' : ''}`}>
            <div className='flexed-container'>
                <h2>This website is made for mobile view, please use a mobile device to view this website.</h2>
                <Button
                    type="ghost"
                    text="Show Anyway"
                    onClick={() => { setIsVisible(false) }}
                />
            </div>
        </section>
    )
}

export default MadeForMobileViewScreen