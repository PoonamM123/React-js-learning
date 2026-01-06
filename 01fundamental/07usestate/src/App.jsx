import { useState } from 'react'
import Todolist from './components/Todolist';
import Profile from './components/Profile';
import ShoppingList from './components/ShoppingList';

function App() {
  const [counter,setCounter] = useState(0);

  const decrement=()=>{
    (counter>=1)? setCounter(counter-1):setCounter(counter)
  }
  return (
    <>
      <h1>pm</h1>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>increment</button>
      <button onClick={decrement} >decrement</button>
      <Todolist />
      <Profile />
      <ShoppingList />
      
    </>
  )
}

export default App
