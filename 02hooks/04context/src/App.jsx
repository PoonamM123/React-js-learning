import { createContext, useState } from 'react'
import ComponentA from './assets/components/contextcomponent/ComponentA';

export const Data = createContext();
export const Data1=createContext();
function App() {
  const name="poonam"
  const age="21"
  return (
    <>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA/>
        </Data1.Provider>
      </Data.Provider>  
    </>
  )
}

export default App
