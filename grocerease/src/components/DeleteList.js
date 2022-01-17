import React from 'react'
import { GroceryList } from './GroceryList'

export default function Delete () {
    return (
        <div className='deleteCard'>
            <button>
                <i className='delete icon'></i>
                Delete Card
            </button>
            <GroceryList/>
        </div>
    )
}