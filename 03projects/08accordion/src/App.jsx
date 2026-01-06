import { useState } from 'react'
import Accordion from './accodion'
import { accordionData } from './accodion'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
          <div className="accordion">
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />
            ))}
          </div>
      </div>
    </>
  )
}

export default App
