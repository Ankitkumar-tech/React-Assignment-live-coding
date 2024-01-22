import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LeetCode from './LeetCode/LeetCode'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LeetCode />
    </>
  )
}

export default App
