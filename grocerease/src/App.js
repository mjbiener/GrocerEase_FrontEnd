import './App.css'
import { useState } from 'react'
import { GroceryList } from './components/GroceryList'
import { GroceryCard } from './components/GroceryCard'
import  Login from './components/login.js'

export default function App() {
  return (
    <div>
      <GroceryList/>
      <Login/>
    </div>
)
}
