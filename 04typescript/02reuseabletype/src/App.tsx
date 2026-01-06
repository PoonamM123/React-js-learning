import './App.css'
import Admin from './assets/admin'
import User from './assets/user'

function App() {
  function fun(){
    console.log("clicked")
  }
  return (
    <>
      <User name="poonam" classes="me it" user="yes" fun={fun}/>
      <Admin name="poonam" classes="me it" user="yes" fun={fun} isadmin="yes"/>
    </>
  )
}

export default App
