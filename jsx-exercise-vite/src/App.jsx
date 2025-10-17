import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FirstComponent from './components/FirstComponent.jsx'
import NamedComponent from './components/NamedComponent.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + ReactJSX Exercise</h1>

      {/* ------ PART 1 ------- */}
      <FirstComponent />
      <NamedComponent name="TechEdDan2" />

      {/* ------ PART 2 ------- */}


      { /* ------ PART 3 ------- */}


    </>
  )
}

export default App
