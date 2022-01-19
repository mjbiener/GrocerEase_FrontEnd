import './App.css'
import { useState } from 'react'
import { GroceryList } from './components/GroceryList'
import { InputField } from './components/ListForm'

export default function App() {
  return (
    
    <div>
      <InputField/>
      <GroceryList/>
    </div>
)
}

