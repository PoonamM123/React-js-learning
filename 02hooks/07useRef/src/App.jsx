import { useState } from 'react'

import Useref from './assets/components/Useref'
import Timer from './assets/components/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Useref/>
      <Timer />
    </>
  )
}

export default App
