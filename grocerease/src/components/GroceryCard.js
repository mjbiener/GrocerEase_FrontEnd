import React from 'react'

export const GroceryCard = (props) => {
    let { category, name, image } = props

    return (
        <div className='card'>
            <h1> Grocery List </h1>
            <p>{category}, {name}, {image}</p>
            
        </div>
    )
}
// NEEDS THE ABILITY TO ADD A NEW CARD 
// NEEDS THE ABILITY TO ADD A NEW PRODUCT ITEM
// NEEDS TO ONLY HAVE ONE LIST SHOWING AT A TIME 