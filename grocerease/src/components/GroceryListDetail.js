import axios from "axios";
import { useEffect, useState } from 'react';
import '../groceryListDetail.css'
import GroceryListItem from './GroceryListItem'
import { useLocation, useNavigate } from 'react-router-dom'

const GroceryListDetail = ({token}) => {
    const location = useLocation() 
    let listId = location.search.split('=')[1]
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);
    const [listName, setListName] = useState('');
    const [choices, setChoices] = useState('Produce');
    const navigate = useNavigate();

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

        })
        axios.get(`https://grocerease.herokuapp.com/grocerease/lists/${listId}/items/`,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`
            }
        })
        .then (res => {
            console.log(res, 'get items')
            const newItems = [...items, ...res.data]
            setItems(newItems)
        })
    },
    []
    )
    const onAddProduct = (event) => {
        event.preventDefault()
        console.log(choices)
        axios.post(`https://grocerease.herokuapp.com/grocerease/lists/${listId}/items/`, 
        {   name: value,
            quantity: 1,
            choices: choices,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`
            }
        }
        ).then (res => {
            console.log(res, 'items endpoint')
            setItems([
                ...items,
                {name: res.data.name, item_quantity: res.data.item_quantity, choices: res.data.choices}
            ])
        })
    }
    const saveList = () => {
        axios.patch(`https://grocerease.herokuapp.com/grocerease/edit_list/${listId}/`,
        {
            name: listName,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`
            }
        }        
        ).then( () => {
            navigate('/lists')
        })
    }

    return (
        <>
        <div className="list_details_page_container">
            <div className='list_detail_container'>
                <input className='pa2 input-reset ba bg-transparent w-100 measure search_input list_name_category_input' onChange={(event) => setListName(event.target.value)} value={listName}/>

                <select className='' onChange={(event) => setChoices(event.target.value)} value={choices}>
                    <option value='Produce'>Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Baked Goods">Baked Goods</option>
                    <option value="Meat and Fish">Meat and Fish</option>
                    <option value="Frozen Goods">Frozen Goods</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Alcohol">Alcohol</option>
                    <option value="Baby Care">Baby Care</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Sauces and Condiments">Sauces and Condiments</option>
                    <option value="Herbs and Spices">Herbs and Spices</option>
                    <option value="Non-Alcoholic Beverages">Non-Alcoholic Beverages</option>
                    <option value="Household and Cleaning">Household and Cleaning</option>
                    <option value="Health and Beauty">Health and Beauty</option>
                </select>
            </div>
            
            <div className='add_product_container'>
                <div>
                    <input className='pa2 input-reset ba bg-transparent w-100 measure add_product_input' type="text" id="products" value={value}
                    placeholder='Search for products'
                    onChange={(event) => setValue(event.target.value)}></input>
                </div>

                <div>
                    <button className='add_product_button' onClick={onAddProduct} type='submit'>Add Product</button>
                </div>
            </div>
            <div className='button_container'>
                <button className='save_list_button' onClick={saveList} >Save List</button>
                <button onClick={() => {navigate(`/go_shopping?ide=${listId}`)}} className='start_shopping_button'>Start Shopping</button>
            </div>
            <div className="items_container">
                {items.map((item) => {
                    return ( <GroceryListItem item={item} token={token}/>
                    )
                })}
            </div>

        </div>
        </>
    )
}

export default GroceryListDetail;