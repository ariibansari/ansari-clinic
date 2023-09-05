import React, { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import PageUnderDevelopment from '../components/PageUnderDevelopment'
import "../styles/LabTests.css"

const LabTests = () => {
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

    const handleCheckboxClick = (e, i) => {
        setTestList(prev => {
            let updatedList = [...prev];
            updatedList[i].checked = e.target.checked;
            return updatedList
        })
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
            </div>
        </section>
    )
}

export default LabTests