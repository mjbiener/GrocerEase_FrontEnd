import { useState } from 'react'

const GroceryListItem = ({item}) => {
    console.log(item)
    const [itemCount, setItemCount] = useState(item.item_quantity);

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
                    onChange={(event) => setItemCount(event.target.value)}>
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