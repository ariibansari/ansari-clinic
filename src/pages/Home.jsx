import React from 'react'
import Button from '../components/Button'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import PageUnderDevelopment from '../components/PageUnderDevelopment'
import Logo from '../components/Logo'
import "../styles/Home.css"

const Home = () => {
    const navigate = useNavigate()
    return (
        <section className='box-content hover-ring'>
            <header className='flex gap-2'>
                <Button
                    type="icon"
                    icon={<AiOutlineArrowLeft />}
                    onClick={() => navigate(-1)}
                />
                <h1>Home</h1>
            </header>

            <PageUnderDevelopment />
        </section>
    )
}

export default Home