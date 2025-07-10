import { useState } from 'react'
import Product from './components/Product'
import Person from './components/Person'


function App() {

  return (
    <>
      <Product name="pm" price={200}/>
      <Person name="poonam"/>
    </>
  )
}

export default App
