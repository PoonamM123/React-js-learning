import { useState } from 'react'
import Todolist from './assets/components/Todolist'
import "./index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{textAlign:'center'}}>To-DO List Project </h1>
      <Todolist/>
      
    </>
  )
}

export default App
