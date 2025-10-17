import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FirstComponent from './components/FirstComponent.jsx'
import NamedComponent from './components/NamedComponent.jsx'
import Person from './components/Person.jsx'
import './App.css'
import Tweet from './components/Tweet.jsx'


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

      <h2 className='press-start-2p-regular'>Part 02 Messages</h2>
      {/* ------ PART 2 ------- */}
      <Tweet username="TechEdDan" message="Hello World! This is my first tweet!" date={new Date().toDateString()} />
      <Tweet username="RobotsRule" message="Beep Beep Boop, this is my first tweet!" date={new Date().toDateString()} />
      <Tweet username="MonstersAreCooler" message="Rawwwr! This is my first tweet!" date={new Date().toDateString()} />

      <h2 className='press-start-2p-regular'>Part 03 Person</h2>

      { /* ------ PART 3 ------- */}
      <div className="person-container">
        <Person
          name="Mandalorian"
          age={40}
          hobbies={["bounty hunting", "watching Disney", "keeping Baby Yoda safe"]}
        />
        <Person
          name="Grogu"
          age={53}
          hobbies={["eating everything", "using the force", "saving the day"]} />

        <Person
          name="Asoka Tano"
          age={45}
          hobbies={["lightsaber duels", "starship piloting", "helping the Jedi"]}
        />

        <Person
          name="Youngling"
          age={10}
          hobbies={["learning the force", "playing with droids", "podracing"]}
        />

      </div>

    </>
  );
}

export default App
