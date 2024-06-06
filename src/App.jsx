import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './foodcomponents/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='w-[90%] mx-auto'>
      <Navbar/>
      <Outlet/>
    
    </div>
  )
}

export default App
