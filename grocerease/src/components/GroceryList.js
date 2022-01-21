import axios from 'axios'
import { useState, useEffect } from 'react'
import { GroceryCard } from './GroceryCard'


export const GroceryList = ({token}) => {
    const [groceryList, setGroceryList] = useState(null)
    
    useEffect(() => { 
        // axois get request for saved grocery list 
    }, [token, setGroceryList])
    
    
    // const handleSubmit = () => {
    //     axios
    //     .post('https://grocerease.herokuapp.com/grocerease/add_list_item/id', {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Authorization: `token ${token}`,
    //         },
    //     })
    //     .then((res) => setGroceryList(res.data))

    // }

    return (
        
        <div className='grocery-list'>

            {groceryList &&
                groceryList.map((cardObj) => {
                    return (
                        <GroceryCard
                            name={cardObj.name}
                            date_created={cardObj.date_created}
                            tags={cardObj.tags}
                        />
                    )
                })}
            <div className="search-filter">
                <div>
                    <label>Sort By:</label>
                    <select className="sort-by">
                        <option value="">Select one</option>
                        <option value="name">Title</option>
                        <option value="date">Date</option>
                        <option value="tags">Tags</option>
                    </select>
                </div>
                
            </div>
            <div>
            </div>
        </div>
    )
}


export default GroceryList