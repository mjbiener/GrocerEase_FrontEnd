import { useState } from 'react'
import axios from 'axios';


const GroceryListItem = ({item, token}) => {
    console.log(item)
    const [itemData, setItemData] = useState(item);
    const [itemCount,setItemCount] = useState(item.item_quantity);
    

return (
    <div className='grocery_list'>
        <div className='grocery_item_detail'>
            <div className='delete_button'>
                <i className='fas fa-times-circle fa-3x'></i>
            </div>
            <div className='grocery_item_text'>
                <h2>{item.name}</h2>
                <input className='item_count'
                    type='number'
                    value={itemCount}
                    onChange={(event) => {
                        setItemCount(event.target.value);
                        axios.patch(`https://grocerease.herokuapp.com/grocerease/item_detail/${item.item_quantity}/`,
                        console.log(event),
                        {
                         quantity: item.item_quantity,
                        })}}>
                </input>
                <p className='count'>ct.</p>
            </div>
        </div>
        <div>         
            <img src={item.image} alt=''></img>
        </div>
    </div>
)
}

export default GroceryListItem;