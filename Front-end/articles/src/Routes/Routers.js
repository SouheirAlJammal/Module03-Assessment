import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Card from '../components/Card'
import Articles from '../pages/Articles'
const Routers = () => {
  return (
   <Routes>
    <Route path='/' element={<Articles />}/>
    {/* <Route path='/article'  element={}/>
    <Route path='/Dashboard'element={} /> */}
   </Routes>
  )
}

export default Routers
