import axios from "axios";
import { useState } from 'react';

const GroceryListDetail = ({listId}) => {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([{
        name: 'cucumber',
        image: '',
        category: 'vegatable',
        aisle : '1'
    }])

    const axiosCall = () => {
        axios.post(`https://grocerease.herokuapp.com/grocerease/add_list_item/${listId}/`, 
        { Product_name: value,
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
        <div>
            <input type="text" id="products" value={value} 
            placeholder='Search for products'
            onChange={(event) => setValue(event.target.value)}></input>
        </div>
        <div>
            <button onClick={axiosCall} type='submit'>Add Product</button>
        </div>
        <div>
            {items.map((item) => {
                return (
                    <div>
                        <p>{item.name}</p>
                        <img src={item.image} alt=''></img>
                        <p>{item.category}</p>
                        <p>{item.aisle}</p>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default GroceryListDetail;