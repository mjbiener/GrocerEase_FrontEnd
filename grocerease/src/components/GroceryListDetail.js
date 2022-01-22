import axios from "axios";
import { useEffect, useState } from 'react';
import '../groceryListDetail.css'
import GroceryListItem from './GroceryListItem'
import { useLocation } from 'react-router-dom'

const GroceryListDetail = ({token}) => {
    const location = useLocation() 
    let listId = location.search.split('=')[1]
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);
    const [listName, setListName] = useState('');
    const [listTags, setListTags] = useState([]);

    useEffect(() => {
        axios.get(`https://grocerease.herokuapp.com/grocerease/list_detail/${listId}`,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`
            }
        })
        .then (res => {
            setListName(res.data.name)
            setListTags(res.data.tags)
        })
    },
    []
    )
    const axiosCall = (event) => {
        event.preventDefault()
        axios.patch(`https://grocerease.herokuapp.com/grocerease/create_item/${listId}/`, 
        { product_name: value,
            quantity: value,
            
        },
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`
            }
        }
        ).then (res => {
            console.log(res)
            setItems([
                ...items,
                {name: res.name, image: res.image}
            ])
        })
    }
    return (
        <>
        <div className='list_detail_name_tag'>
            <p className='pa2 input-reset ba bg-transparent w-100 measure search_input'>{listName}</p>
            <p className='pa2 input-reset ba bg-transparent w-100 measure search_input'>{listTags.join(', ')}</p>
        </div>
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
        <div className='button_container'>
            <button className='save_list_button'>Save List</button>
            <button className='start_shopping_button'>Start Shopping</button>
        </div>
        </>
    )
}

export default GroceryListDetail;