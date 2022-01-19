import React from 'react'

export const GroceryCard = (props) => {
    let { list_title , created_at, tags } = props

    
    return (
        
        <div className='card'>
            <h1> {list_title}</h1>
            <ul>{created_at} </ul>
            <ul>{tags}</ul>
            <button className='detailsButton' value='details'>Details</button>
        </div>
    )
}
// NEEDS THE ABILITY TO ADD A NEW CARD 
// NEEDS THE ABILITY TO ADD A NEW PRODUCT ITEM
// NEEDS TO ONLY HAVE ONE LIST SHOWING AT A TIME 