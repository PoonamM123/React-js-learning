import { useState } from 'react'

import './App.css'
import Button from './assets/button'
function clicked(){
  console.log("click")
}

function App() {

  return (
    <>
      <Button myname="btn" fun={clicked}  isbool={false}/>
    </>
  )
}

export default App
