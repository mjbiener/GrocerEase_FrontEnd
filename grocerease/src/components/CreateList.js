import React from "react";
import { useNavigate } from "react-router-dom"
// import { GroceryCard } from './GroceryCard'
import GroceryList from './SavedGroceryList'


export default function Createlist () {
let navigate = useNavigate();

return (
<div>
<div className="ListNa">
        <label className="db fw4 lh-copy f6" htmlFor="">List Name:</label>
        <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name='text' placeholder='Name your List'/>
        <button>Submit</button> 
    </div>
        <div className="ListTa">
        <label className="db fw4 lh-copy f6" htmlFor="">List Tag:</label>
        <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name='text' placeholder='Name your Tag'/>
        <button>Submit</button> 
    </div>

<div>
    <GroceryList />
</div>

<div className="startshop">
    <a href="/Login">
    <button onClick={() => {
    navigate("/Login")
    }}>Start Shopping</button>
    </a>
</div>
</div>
)
} 
