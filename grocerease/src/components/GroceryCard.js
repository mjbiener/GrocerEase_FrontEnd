import React from 'react'

export const GroceryCard = (props) => {
    let { category, name, image } = props

    return (
        <div>
            <h1>{category}</h1>
            <p>{name}</p>
            <p>{image}</p>
        </div>
    )
}

