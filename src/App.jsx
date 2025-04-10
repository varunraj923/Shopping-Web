import React from 'react'

import Home from './components/Home'
import Login from './components/Login'
import Body from './components/Body'

import { BrowserRouter,Route, Routes} from 'react-router-dom'






const App = () => {

 
  return (
    <>

    <BrowserRouter basename='/' >
    <Routes>
      <Route path='/' element={<Body/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
     

      </Route>
      
    </Routes>
    </BrowserRouter>

  
    
    </>
  )
}

export default App
