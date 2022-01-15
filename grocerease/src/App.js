import './App.css'
import { useState } from 'react'
import { GroceryList } from './components/GroceryList'
import { GroceryCard } from './components/GroceryCard'
import  Login from './components/login.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
)
}
