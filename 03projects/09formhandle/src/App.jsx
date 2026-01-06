import { useState } from 'react'


function App() {
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirmpass, setConfirpass]=useState("")

  const [errorusername,seterrorUsername]=useState("")
  const [erroremail,seterrorEmail]=useState("")
  const [errorpassword,seterrorPassword]=useState("")
  const [errorconfirmpass, seterrorConfirpass]=useState("")

  const [colorusername,setcolorUsername]=useState("")
  const [coloremail,setcolorEmail]=useState("")
  const [colorpassword,setcolorPassword]=useState("")
  const [colorconfirmpass, setcolorConfirpass]=useState("")

  const handle=(e)=>{

    e.preventDefault();
    if(username.length>9){
      seterrorUsername('')
      setcolorUsername("green")
    }else{
      seterrorUsername("username is too short")
      setcolorUsername("red")
    }

    if(email.includes('@gmail')){
      seterrorEmail('')
      setcolorEmail("green")
    }else{
      seterrorEmail("email must contain @gmail")
      setcolorEmail("red")
    }
    if(password.length>=9 ){
      seterrorPassword("")
      setcolorPassword("green")
      if(confirmpass.length>=9 && (password==confirmpass)){
        seterrorConfirpass('')
        setcolorConfirpass("green")
      }else{
        seterrorConfirpass('password doesnt match')
        setcolorConfirpass("red")
      }
    }else{
      seterrorPassword("password is short")
      setcolorPassword("red")
      if(confirmpass.length>=9){
        seterrorConfirpass('')
        setcolorConfirpass("green")
      }else{
        seterrorConfirpass('confirmpass is too short')
        setcolorConfirpass("red")
      }
    }
    


  }

  return (
    <>
    <div>
      <form>
          <label>username</label>:<input type="text" value={username} style={{borderColor:colorusername}} onChange={e=>setUsername(e.target.value)}/>
          <p>{errorusername}</p>

          <label>email</label>:<input type="text" value={email}  style={{borderColor:coloremail}} onChange={(e)=>setEmail(e.target.value)}/>
          <p>{erroremail}</p>

          <label>password</label>:<input type="text" value={password} style={{borderColor:colorpassword}} onChange={(e)=>setPassword(e.target.value)} />
          <p>{errorpassword}</p>

          <label>confirmpass</label>:<input type="text" value={confirmpass} style={{borderColor:colorconfirmpass}} onChange={(e)=>setConfirpass(e.target.value)} />
          <p>{errorconfirmpass}</p>

          <button onClick={handle}>Register</button>
      </form>

    </div>
    </>
  )
}

export default App
