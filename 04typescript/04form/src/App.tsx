// import { useState } from 'react'
import './App.css'
import Contactform from './assets/contactform'
import Event from './assets/event'
import Focusinput from './assets/focusinput'
import Form from './form'

function App() {
  // const [count, setCount] = useState(0);/

  return (
    <>
      <Form/>
      <Focusinput/> 
      <Contactform/>
      <Event/>
    </>
  )
}

export default App
