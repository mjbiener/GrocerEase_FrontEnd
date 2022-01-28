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
                <h2 className='item_name'>{item.name}</h2>
                <div className='item_count_container'>
                    <input className='item_count'
                        type='number'
                        value={itemCount}
                        onChange={(event) => setItemCount(event.target.value)}>
                    </input>
                    <p className='count'>ct.</p>
                </div>
                <p>{item.choices}</p>
            </div>
        </div>
    </div>
)
}

export default GroceryListItem;