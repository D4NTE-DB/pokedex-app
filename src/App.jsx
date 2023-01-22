import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Routes, Route,Link } from 'react-router-dom'
import Character from './components/Character'
import InputName from './components/inputName'
import CharacterDetails from './components/CharacterDetails'
import Home from './components/Home'
import CharacterCard from './components/CharacterCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <div className="App">
      <Routes>'
        {/* <Link>character</Link> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/character/' element={<Character/>}/>
        <Route path='/character/:id' element={<CharacterDetails/>}/>
        <Route path='/cd' element={<CharacterCard/>} />
        <Route path='/inputName' element={<InputName/>}/>z  
      </Routes>
      </div>
    </HashRouter>
  )
}

export default App
