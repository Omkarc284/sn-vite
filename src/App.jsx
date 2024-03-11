import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import Fashion from './components/Fashion'
import Tech from './components/Tech'
import Env from './components/Env'
import About from './components/About'
// import ImgCanvas from './components/ImgCanvas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Navbar className="sec"/>
        <Home className="sec"/>
        <Tech className="sec"/>
        <Fashion className="sec"/>
        <Env className="sec"/>
        <About className="sec"/>
        {/* <ImgCanvas /> */}
      </div>
    </>
  )
}

export default App
