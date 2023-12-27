import { useState } from 'react'

import './App.css'
import Faqs from './Components/Faqs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Faqs/>
    </>
  )
}

export default App
