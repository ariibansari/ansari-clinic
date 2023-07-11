import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import PageUnderDevelopment from '../components/PageUnderDevelopment'

const Settings = () => {
  const navigate = useNavigate()
  return (
    <section className='box-content hover-ring'>
      <header className='flex gap-2'>
        <Button
          type="icon"
          icon={<AiOutlineArrowLeft />}
          onClick={() => navigate(-1)}
        />
        <h1>Settings</h1>
      </header>

      <PageUnderDevelopment />
    </section>
  )
}

export default Settings