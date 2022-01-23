import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// shows the information that will be shown on each Grocery Card before clicking on the Details button 

export const GroceryCard = ({ name, date_created, tags, listId }) => {
    const navigate = useNavigate()
    return (
            <div className='card'>
                <h2> {name}</h2>
                <ul>{date_created} </ul>
                <ul> Tags: {tags}</ul>
                <button 
                className='detailsButton' type='submit' to='/create_list' onClick={() => {navigate(`/create_list_detail?id=${listId}`)}}>Details</button>
            </div>
    )}
    

