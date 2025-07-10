import { useState } from 'react'
import Wheater from './components/Wheater'
import UserStatus from './components/UserStatus'
import Greeting from './components/Greeting'


function App() {

  return (
    <>
      <Wheater temprature="24"/>
      <UserStatus islogin={true} isadmin={true}/>
      <Greeting time={"Evining"}/>
    </>
  )
}

export default App
