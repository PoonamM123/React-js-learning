import { useEffect, useState } from 'react'
import './App.css'
import data from './db/data';
import Product from './component/product';
import Nav from './component/nav';
import Inputfilter from './component/input'
 
function App() {
  const [product, setProduct] = useState(data);
    return <>
      <Nav data={data} setProduct={setProduct} />
      <Inputfilter setProduct={setProduct} />
      <Product product={product}/>
    </> 

}
export default App
