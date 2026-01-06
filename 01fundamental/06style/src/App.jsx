import { useState } from 'react'
import ProfileCard from './components/Profilecard'
import IconComponent from './components/IconComponent'

function App() {

  return (
    <>
      <h1 style={{backgroundColor:"lightBlue", padding:"20px", borderRadius:"10px",color:"darkBlue"}}>Hello Poonam Mehandiya</h1>
      <ProfileCard/>
      <IconComponent/>
    </>
  )
}

export default App
