import React from 'react'

export const GroceryCard = (props) => {
    let { list_title , created_at, tags } = props

    
    return (
        
        <div className='card'>
            <h2> {list_title}</h2>
            <ul>{created_at} </ul>
            <ul>{tags}</ul>
            <button className='detailsButton' value='details'>Details</button>
        </div>
    )
}
