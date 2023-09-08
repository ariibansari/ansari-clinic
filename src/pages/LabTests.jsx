import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineUserAdd } from 'react-icons/ai'
import { BiLogoWhatsapp } from 'react-icons/bi'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import PageUnderDevelopment from '../components/PageUnderDevelopment'
import "../styles/LabTests.css"
import { RiExternalLinkLine } from 'react-icons/ri'
import Modal from '../components/Modal'

const LabTests = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isLetterModalOpen, setIsLetterModalOpen] = useState(false)
    const navigate = useNavigate()
    const [testList, setTestList] = useState([
        { id: 1, test_name: "CBC", checked: false },
        { id: 2, test_name: "ESR", checked: false },
        { id: 3, test_name: "HbA1c", checked: false },
        { id: 4, test_name: "Blood Sugar F & PP", checked: false },
        { id: 5, test_name: "Urine Routine & Microscopic", checked: false },
        { id: 6, test_name: "Renal Profile", checked: false },
        { id: 7, test_name: "Cardiac Profile", checked: false },
        { id: 8, test_name: "Lipid Profile", checked: false },
        { id: 9, test_name: "Thyroid Profile", checked: false },
        { id: 10, test_name: "Serum Vitamin & Electrolytes", checked: false },
        { id: 11, test_name: "BUN", checked: false },
    ])
    const [contacts, setContacts] = useState([
        { name: 'Clinic Phone', number: '+918451066353' },
        { name: 'Arib Ansari', number: '+918104302115' },
        { name: 'Dr. Shahid Mohammed', number: '+917785465987' },
    ])
    const [selectedContact, setSelectedContact] = useState(null)

    const [showingNewContactForm, setShowingNewContactForm] = useState(false)
    const [newContactName, setNewContactName] = useState('')
    const [newContactNumber, setNewContactNumber] = useState('')
    const [addContactError, setAddContactError] = useState('')

    useEffect(() => {
        if (localStorage.getItem('ac-myContacts')) {
            setContacts(JSON.parse(localStorage.getItem('ac-myContacts')))
        }
    }, [])

    const handleCheckboxClick = (e, i) => {
        setTestList(prev => {
            let updatedList = [...prev];
            updatedList[i].checked = e.target.checked;
            return updatedList
        })
    }

    const saveContact = () => {
        if (newContactName.length === 0) {
            setAddContactError('Please add a name')
            return
        }
        if (newContactNumber.length < 10) {
            setAddContactError('Please add a valid number')
            return
        }

        let updatedContacts = [...contacts]
        updatedContacts.unshift({ name: newContactName, number: newContactNumber })
        setContacts(updatedContacts)
        localStorage.setItem('ac-myContacts', JSON.stringify(updatedContacts))

        setShowingNewContactForm(false)
    }

    const sendWhatsappMessage = () => {
        let testIndex = 0
        let text = 'Lab Tests - \n'
        testList.forEach((test) => {
            if (test.checked) {
                testIndex++
                text += `${testIndex}) ${test.test_name}\n`
            }
        })
        const encodedText = encodeURIComponent(text)
        let link = `https://wa.me/${selectedContact.number}?text=${encodedText}`
        let linkElement = document.createElement('a')
        linkElement.setAttribute('href', link)
        linkElement.setAttribute('target', '_blank')
        document.body.appendChild(linkElement)
        linkElement.click()
        document.body.removeChild(linkElement)
    }

    return (
        <section className='box-content hover-ring'>
            <header className='flex gap-2'>
                <Button
                    type="icon"
                    icon={<AiOutlineArrowLeft />}
                    onClick={() => navigate(-1)}
                />
                <h1>Lab Tests</h1>
            </header>

            <div id="lab">
                <div className='test-list'>
                    {testList.map((test, i) => {
                        return (
                            <div key={i} className='test'>
                                <input id={`test-${i}`} type='checkbox' checked={test.checked} onChange={e => handleCheckboxClick(e, i)} />
                                <label htmlFor={`test-${i}`} className={`${test.checked ? 'is-checked' : ''}`}>{test.test_name}</label>
                            </div>
                        )
                    })}
                </div>
                <div className='button-container'>
                    <Button
                        type="main"
                        text="Send on Whatsapp"
                        icon={<BiLogoWhatsapp style={{ width: 'var(--large-font-size)', height: 'var(--large-font-size)' }} />}
                        style={{ width: '100%', gap: '0' }}
                        onClick={() => setIsOpen(true)}
                    />
                    <Button
                        type="link"
                        text="or, create letter"
                        icon={<RiExternalLinkLine />}
                        iconPlacement='after-text'
                        gap='5px'
                        onClick={() => setIsLetterModalOpen(true)}
                    />
                </div>
                <Modal
                    isOpen={isOpen}
                    onClose={() => { setIsOpen(false); setShowingNewContactForm(false) }}
                    title="Select contact"
                    footerButton={
                        showingNewContactForm
                            ?
                            <Button
                                type="main"
                                text="Save"
                                variant='dark'
                                onClick={saveContact}
                            />
                            :
                            <Button
                                type="main"
                                text="Send"
                                icon={<BiLogoWhatsapp style={{ width: 'var(--large-font-size)', height: 'var(--large-font-size)', fill: 'var(--text-color-1)' }} />}
                                variant='dark'
                                onClick={sendWhatsappMessage}
                                disabled={selectedContact === null}
                            />
                    }
                >
                    <div className='contacts'>
                        {showingNewContactForm
                            ?
                            <div className='new-contact'>
                                <Button
                                    type="link"
                                    text="Back"
                                    icon={<AiOutlineArrowLeft style={{ width: 'var(--medium-font-size)', height: 'var(--medium-font-size)' }} />}
                                    iconPlacement='before-text'
                                    gap='5px'
                                    style={{ fontSize: 'var(--small-font-size)', fontWeight: '400', textDecoration: 'none', justifyContent: 'flex-start', marginBottom: '2rem' }}
                                    onClick={() => setShowingNewContactForm(false)}
                                />
                                <div className='new-contact-form'>
                                    <div className='input-group'>
                                        <label htmlFor='contact-name'>Name</label>
                                        <input type='text' id='contact-name' value={newContactName} onChange={e => { setAddContactError(''); setNewContactName(e.target.value) }} />
                                    </div>
                                    <div className='input-group'>
                                        <label htmlFor='contact-number'>Number</label>
                                        <input type='number' id='contact-number' value={newContactNumber} onChange={e => { setAddContactError(''); setNewContactNumber(e.target.value) }} />
                                    </div>
                                    <p className='text-danger'>{addContactError}</p>
                                </div>
                            </div>

                            :
                            <>
                                <Button
                                    type="link"
                                    text="add new contact"
                                    icon={<AiOutlineUserAdd style={{ width: 'var(--medium-font-size)', height: 'var(--medium-font-size)' }} />}
                                    iconPlacement='before-text'
                                    gap='5px'
                                    style={{ fontSize: 'var(--small-font-size)', fontWeight: '400', textDecoration: 'none' }}
                                    onClick={() => setShowingNewContactForm(true)}
                                />
                                <br />
                                {
                                    contacts.map((contact, i) => {
                                        return (
                                            <div
                                                key={i}
                                                className={`contact ${selectedContact?.number === contact.number ? 'selected' : ''}`}
                                                onClick={() => setSelectedContact(contact)}
                                                id={`contact`}
                                            >
                                                <div className={`left`}></div>
                                                <div className='right'>
                                                    <p className='contact-name'>{contact.name.substring(0, 18)}{contact.name.length > 18 && '...'}</p>
                                                    <span className='contact-number'>{contact.number}</span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </>
                        }

                    </div>

                </Modal>
                <Modal
                    isOpen={isLetterModalOpen}
                    onClose={() => { setIsLetterModalOpen(false) }}
                    title='Under Development'
                >
                    <h2>This feature is still under development.</h2>
                    <br />
                    <p className='text-color-2 font-little'>With this option you would able to get the list of selected lab test on the letterhead. You can then download the letterhead as an image which will have the selected lab test list</p>
                    <p className='text-color-2 font-little'>You can also edit the content of the letterhead before downloading so that you can set the details of patients in the letter.</p>
                    <br />
                </Modal>
            </div>
        </section >
    )
}

export default LabTests