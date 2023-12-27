import { useState } from 'react'

import './App.css'
import Faqs from './Components/Faqs'
import Attribution from './Components/Attribution'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Faqs/>
      <Attribution/>
      </div>
    </>
  )
}

export default App
