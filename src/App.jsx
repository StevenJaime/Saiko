import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import NavBar from './components/Navbar'

const App = () => {
  return (
    <div>
      <NavBar />
      <div className='px-15'>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      </div>
    </div>
  )
}

export default App