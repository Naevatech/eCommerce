import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Signin from './components/Signin'


const App = () => {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Nav />} />
      <Route path='/sign-in' element={<Signin />} />
      {/* <Route path='/sign-up' element={<Signup />} /> */}

      {/* admin */}
      
    </Routes>
    </>
  )
}

export default App