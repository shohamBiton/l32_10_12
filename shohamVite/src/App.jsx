import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Toggle from './toggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Counter></Counter>
      <Toggle></Toggle>
    </div>
  )
}

export default App
