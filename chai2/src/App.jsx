import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    if (counter < 20) {
      setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
         setCounter(prevCounter => prevCounter + 1)
          setCounter(prevCounter => prevCounter + 1)

    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>React.js | Vite</h1>
      <h2>Counter value : {counter}</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Veritatis consectetur voluptatibus possimus optio hic! Facilis laudantium sint repellat
        officiis natus molestias possimus non quidem incidunt soluta esse, quod, odit ratione? {counter}
      </p>

      <button onClick={addValue}>Add value {counter}</button>
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App;
