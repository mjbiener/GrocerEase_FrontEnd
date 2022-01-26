import axios from 'axios'
import { useState, useEffect } from 'react'
import { GroceryCard } from './GroceryCard'
import _ from "lodash";


const SavedGroceryList = ({ token }) => {
    const [lists, setLists] = useState([])

    useEffect(() => {
        axios
            .get('https://grocerease.herokuapp.com/grocerease/lists/', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `token ${token}`,
                }
            })
            .then((res) => {
                setLists(res.data)
                console.log(res.data)
            })
            .catch(error => console.log(error))
    }, [token, setLists])


    _.orderBy(lists, ['name'], ['asc', 'desc']);


    return (

        //  update the state of items need the sort function (lodash ), order by, sort by, collection: sort by, order by or group by 
        <div>
            <div className="search-filter">
                <div>
                    <label>Sort By:</label>

                    <select className="sort-by">
                        <option value="">Select one</option>
                        <option value="name">Title</option>
                        <option value="date">Date</option>
                    </select>

 

                </div>
            </div>


            <div className='grocery-list'>
                {lists &&
                    lists.map((list) => {
                        console.log(list)
                        return (
                            <GroceryCard
                                name={list.name}
                                date_created={list.date_created}
                                tags={list.tags}
                                listId={list.pk}
                            />
                        )
                    })}

            </div>
        </div>
    )
}


export default SavedGroceryList;
