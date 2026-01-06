import { useState } from 'react'
import ComponentA from './assets/components/popdrill/ComponentA'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ComponentA  name="poonam"/>
    </>
  )
}

export default App
