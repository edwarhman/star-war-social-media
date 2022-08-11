import React from 'react'
import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Login } from './components/login'
import { Profile } from './components/profile'
import { Details } from './components/details'
import { PrivateRoute } from './components/privateRoute'
import { Root } from './components/root'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />}></Route>
          </Route>
          <Route path="/details" element={<PrivateRoute />}>
            <Route path="/details:filmId" element={<Details />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
