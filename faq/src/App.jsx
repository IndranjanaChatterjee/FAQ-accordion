import { useState } from 'react'

import './App.css'
import Faqs from './Components/Faqs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex justify-center items-center min-h-screen">
      <Faqs/>
      </div>
    </>
  )
}

export default App
