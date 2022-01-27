import axios from 'axios'
import { useState, useEffect } from 'react'
import { GroceryCard } from './GroceryCard'
import _ from 'lodash'

const SavedGroceryList = ({ token }) => {
    const [lists, setLists] = useState([])

    useEffect(() => {
        axios
            .get('https://grocerease.herokuapp.com/grocerease/lists/', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `token ${token}`,
                },
            })
            .then((res) => {
                let saved_lists_from_server = res.data
                console.log('LISTS from SERVER')
                console.log(saved_lists_from_server)
                const sorted_lists = _.orderBy(
                    saved_lists_from_server,
                    ['name'],
                    ['asc']
                )
                console.log({ sorted_lists })
                setLists(sorted_lists)
            })
            .catch((error) => console.log(error))
    }, [token, setLists])

    const DeleteList = (listId) => {
        axios
            .delete(
                `https://grocerease.herokuapp.com/grocerease/delete_list/${listId}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `token ${token}`,
                    },
                }
            )
            .then((res) => {
                setLists(lists.filter((list) => list.pk !== listId))
            })
    }

    return (

        // <div>
        //             <div className="search-filter">
        //     <div>
        //         <label>Sort By:</label>
        //         <select className="sort-by">
        //             <option value="">Select one</option>
        //             <option value="name">Title</option>
        //         </select>
        //     </div>
        // </div>


        <div className='groceryList_container'>
            <div>
                <div className="search-filter">
                    <div>
                        <label>Sort By:</label>
                        <select className="sort-by">
                            <option value="">Select one</option>
                            <option value="name">Title</option>
                        </select>
                    </div>
                </div>

                {
                    lists &&
                    lists.map((list) => {
                        console.log(list)
                        return (

                            <GroceryCard
                                name={list.name}
                                date_created={list.date_created}
                                tags={list.tags}
                                listId={list.pk}
                                onDelete={DeleteList} />
                        )
                    })
                }
                {/* <div className="search-filter">
                <div>
                    <label>Sort By:</label>
                    <select className="sort-by">
                        <option value="">Select one</option>
                        <option value="name">Title</option>
                    </select>
                </div>
            </div>
            <div>
            </div> */}
            </div>
            </div>
            )
}


            export default SavedGroceryList;
