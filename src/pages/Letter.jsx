import React, { useEffect, useState } from 'react'
import { AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { BsChevronDown } from 'react-icons/bs'
import { BiDownload } from 'react-icons/bi'
import "../styles/Letter.css"

const Letter = () => {
  const [content, setContent] = useState('')
  const [step, setStep] = useState(1)

  const navigate = useNavigate()

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const text = urlParams.get('text');

    if (text) {
      setContent(text)
    }
  }, [])


  return (
    <section className='box-content hover-ring'>
      <header className='flex gap-2'>
        <Button
          type="icon"
          icon={<AiOutlineArrowLeft />}
          onClick={() => navigate(-1)}
        />
        <h1>Letter</h1>
      </header>


      <div id='letter-container' className=''>
        {step === 0
          &&
          <>
            <div className='header'>
              <BsChevronDown />
              <select>
                <option value={0}>select letter template</option>
              </select>
            </div>
            <textarea id='content-textarea' placeholder='type the content here' value={content} onChange={e => setContent(e.target.value)} />
            <Button
              type="main"
              text="Next"
              style={{ width: '100%', margin: '2rem 0' }}
              icon={<AiOutlineArrowRight />}
              iconPlacement='after-text'
              onClick={() => {
                setStep(step => step + 1)
              }}
            />
          </>
        }
        {step === 1
          &&
          <>
            <div>
              <h2>Select settings</h2>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
            <Button
              type="main"
              text="Next"
              style={{ width: '100%', margin: '2rem 0 1.5rem 0' }}
              icon={<AiOutlineArrowRight />}
              iconPlacement='after-text'
              onClick={() => {
                setStep(step => step + 1)
              }}
            />
            <Button
              type="ghost"
              text="Back"
              style={{ width: '100%', margin: '0' }}
              onClick={() => {
                setStep(step => step - 1)
              }}
            />

          </>
        }
        {step === 2
          &&
          <>
            <div>
              <h2>Preview</h2>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
            <Button
              type="main"
              text="Download"
              style={{ width: '100%', margin: '2rem 0 1.5rem 0' }}
              icon={<BiDownload />}
              iconPlacement='after-text'
              onClick={() => {
                setStep(step => step + 1)
              }}
            />
            <Button
              type="ghost"
              text="Back"
              style={{ width: '100%', margin: '0' }}
              onClick={() => {
                setStep(step => step - 1)
              }}
            />

          </>
        }
      </div>
    </section>
  )
}

export default Letter