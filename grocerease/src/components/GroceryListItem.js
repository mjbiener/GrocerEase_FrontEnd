import { useState } from 'react'
import axios from 'axios';


const GroceryListItem = ({item, token, onGrabList, onUpdateCount}) => {
    console.log(item)

    
    const deleteItem = (item) => {
        axios.delete(`https://grocerease.herokuapp.com/grocerease/delete_item/${item.pk}/`,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`
            },
        })
        .then(() => {
        console.log("here")    
         onGrabList();   
        }
        )}
    

return (
    <div className='grocery_list'>
        <div className='grocery_item_detail'>
            <div className='delete_button'>
                <i className='fas fa-times-circle fa-3x' onClick={(event) => {
                    event.preventDefault()
                    deleteItem(item)
                }}>
                </i>
            </div>
            <div className='grocery_item_text'>
                <h2 className='item_name'>{item.name}</h2>
                <div className='item_count_container'>
                    <p>Current Qty: {item.item_quantity} </p>
                    <br></br>
                    {/* <div className = "update_qty"> */}
                        <label for name="item_count">new Qty</label>
                        <input className='item_count'
                            type='number'
                            value={item.quantity}
                            onChange={(event) => onUpdateCount(item.pk, event.target.value)}>
                        </input>
                        <p className='count'>ct.</p>
                    {/* </div> */}
                </div>
                <p>{item.choices}</p>
                </div>
            </div>
        </div>
)}


export default GroceryListItem;