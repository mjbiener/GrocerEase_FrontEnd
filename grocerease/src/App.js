import './App.css'
import { useState } from 'react'
import { GroceryList } from './components/GroceryList'
import { GroceryCard } from './components/GroceryCard'
import  Login from './components/login.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Passwordreset from './components/ForgotPassword'



function App() {


    return (
    <div classname="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/ForgotPassword" element={<Passwordreset />} />
        </Routes>
      </Router>
    </div>
)
}

export default App;