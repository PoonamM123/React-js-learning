import { useState } from 'react'
import { UserContext } from './assets/componenets/UserContext'
import Profile from './assets/componenets/Profile'
import Update from './assets/componenets/Update'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserContext>
        <Profile/> 
        <Update/>  
      </UserContext>
    </>
  )
}

export default App