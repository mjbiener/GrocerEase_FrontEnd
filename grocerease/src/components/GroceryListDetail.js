import axios from "axios";
import { useState } from 'react';
import '../groceryListDetail.css'
import GroceryListItem from './GroceryListItem'

const GroceryListDetail = ({listId}) => {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([{
        name: 'cucumber',
        count: 1,
        image: 'https://static.libertyprim.com/files/varietes/concombre-hollandais-large.jpg?1569524167'
        }, 
        {
        name: 'cucumber',
        count: 1,
        image: 'https://static.libertyprim.com/files/varietes/concombre-hollandais-large.jpg?1569524167',
        },
        {
        name: 'cucumber',
        count: 1,
        image: 'https://static.libertyprim.com/files/varietes/concombre-hollandais-large.jpg?1569524167',
        },
        {
        name: 'cucumber',
        count: 1,
        image: 'https://static.libertyprim.com/files/varietes/concombre-hollandais-large.jpg?1569524167',
        }
])

    const axiosCall = (event) => {
        event.preventDefault()
        axios.patch(`https://grocerease.herokuapp.com/grocerease/add_list_item/${listId}/`, 
        { product_name: value,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                // Authorization: `token ${token}`
            }
        }
        ).then (res => {
            console.log(res)
            setItems([
                ...items,
                {name: res.name, image: res.image, category: res.category, aisle: res.image}
            ])
        })
    }
    return (
        <>
        
        <div className='search_product_container'>
            <div>
                <input className='pa2 input-reset ba bg-transparent w-100 measure search_input' type="text" id="products" value={value} 
                placeholder='Search for products'
                onChange={(event) => setValue(event.target.value)}></input>
            </div>
            <div>
                <button className='add_product_button' onClick={axiosCall} type='submit'>Add Product</button>
            </div>
        </div>
        <div>
            {items.map((item) => {
                return ( <GroceryListItem item={item}/>
                )
            })}
        </div>
        </>
    )
}

export default GroceryListDetail;