import React from 'react'
import Navigator from './Components/Navigator'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'

const App = () => {
  return (
    <BrowserRouter>

    <div>
      <Navigator />
      <div className="px-100 pb-100 pt-50 mxy-50 light-black" >
          <Routes>
            <Route element={<About/>} path="/about"/>
            <Route element={<Skills/>} path="/skills"/>
            <Route element={<Projects/>} path="/projects"/>


            <Route element={<Home/>} path='*'/>

            
          </Routes>
      </div>
    </div>
    </BrowserRouter>

  )
}

export default App