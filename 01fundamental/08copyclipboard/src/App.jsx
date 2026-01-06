import { useState } from 'react'
import Popup from './assets/components/Popup';
import Switcher from './assets/components/Switcher';


function App() {
  const [content, setContent]=useState(""); 
  const[copy, setCopy]=useState(false)

  const handle=(e)=>{
    e.preventDefault();
    const val=content.trim();
    if(val){ 
      navigator.clipboard.writeText(val);
    }
    setCopy(true)
    setTimeout(()=>setCopy(false),5000);
  }
   
  return (
    <>
      <form onSubmit={handle}>
        <input type="text" value={content} onChange={(e)=>setContent(e.target.value)}/>
        <button type='submit'>Copy</button>
      </form>
      <Popup copy={copy}/>
      <Switcher />
    </>
  )
}

export default App
