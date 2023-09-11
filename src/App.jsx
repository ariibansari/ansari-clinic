import './App.css'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LabTests from './pages/LabTests'
import Letter from './pages/Letter'
import Settings from './pages/Settings'
import NavigationBar from './components/NavigationBar'
import SplashScreen from './components/SplashScreen'
import { useSetState, useTrackedState } from './context/store'
import Header from './components/Header'
import MadeForMobileViewScreen from './components/MadeForMobileViewScreen'

function App() {
  const setState = useSetState();
  const state = useTrackedState();

  return (
    <>
      <SplashScreen />
      <MadeForMobileViewScreen />
      <BrowserRouter basename='/clinic'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/lab-tests' element={<LabTests />} />
          <Route path='/letter' element={<Letter />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
        <NavigationBar />
      </BrowserRouter>
    </>

    // <section className='box-content hover-ring'>
    //   <Logo
    //     color="var(--primary-color)"
    //     size="var(--logo-size)"
    //   />
    //   <h1>Ansari Clinic</h1>
    //   <h2>Wellness served. Now online</h2>
    //   <h3>Wellness served. Now online</h3>
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, cumque obcaecati laudantium alias quia delectus ullam possimus repellat iste tenetur distinctio labore magni accusantium similique nobis nam asperiores porro voluptates.</p>
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, cumque obcaecati laudantium alias quia delectus ullam possimus repellat iste tenetur distinctio labore magni accusantium similique nobis nam asperiores porro voluptates.</p>
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, cumque obcaecati laudantium alias quia delectus ullam possimus repellat iste tenetur distinctio labore magni accusantium similique nobis nam asperiores porro voluptates.</p>
    //   <Button
    //     type="main"
    //     text="Login"
    //     icon={<AiFillAlert />}
    //   />
    //   <br /><br /><br />
    //   <Button
    //     type="ghost"
    //     text="Open Modal Now"
    //     onClick={openModal}
    //   />

    //   <br /><br /><br />
    //   <Button
    //     type="icon"
    //     icon={<AiOutlineArrowLeft />}
    //     onClick={() => alert("bruhh!")}
    //   />

    //   <br /><br /><br />
    //   <Button
    //     type="link"
    //     text="Read our Term & Conditions"
    //     icon={<RiExternalLinkLine />}
    //     iconPlacement='after-text'
    //     gap='5px'
    //     onClick={() => alert("bruhh!")}
    //   />


    //   <Modal
    //     isOpen={isOpen}
    //     onClose={closeModal}
    //     title="Alert!"
    //     footerButton={
    //       <Button
    //         type="main"
    //         text="Confirm"
    //         variant='darka'
    //       />
    //     }
    //   >
    //     <h2>Hello World</h2>
    //     <h3>Hello World</h3>
    //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vel libero amet qui dignissimos, beatae optio quis sunt neque quia nobis facere nesciunt alias consequuntur! Totam non iste molestias nulla.</p>
    //   </Modal>

    // </section>
  )
}

export default App
