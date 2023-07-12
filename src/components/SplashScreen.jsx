import React, { useEffect, useState } from 'react'
import "../styles/SplashScreen.css"
import Logo from './Logo';

const SplashScreen = () => {
    const [showingSplashScreen, setShowingSplashScreen] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            // setShowingSplashScreen(false)
        }, 2000)
    }, [])

    return (
        <>
            <section className={`splash-screen ${showingSplashScreen ? "show" : "hide"}`}>
                <div className='logo'>
                    <Logo />
                    <div className='logo-text'>
                        <h1>
                            ANSARI
                        </h1>
                        <h2>
                            CLINIC
                        </h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SplashScreen