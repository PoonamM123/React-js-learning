import { Context } from "./assets/context"
import { Counter } from "./assets/counter"
import Compo1 from "./assets/example/compo1"
import { Example } from "./assets/example/example1"


function App() {

  return (
    <>
    
      <Context>
          <Counter/>
          <Example>
            <Compo1/>
          </Example>
      </Context>
    </>
  )
}

export default App
