import { useState, useEffect } from 'react'
import { GroceryCard } from './GroceryCard'
// import  AddCard  from './AddCard';

let fakeData = [ 
    // PROBLEM: NEEDS THE FAKEDATA THIS TO LIST ON 1 GROCERYCARD
    { 
        'list_title': "Jordyn's Grocery List",
        'created_at': '01/19/21',
        'tags':'vegan',
    },

]

export const GroceryList = () => {
    const [groceryList, setGroceryList] = useState(null)

    useEffect(() => {
        setGroceryList(fakeData)

    }, [])

    return (
        <div className='grocery-list'>

            {groceryList &&
                groceryList.map((grocery) => {
                    return (
                        <GroceryCard
                            id={grocery.id}
                            list_title={grocery.list_title}
                            created_at={grocery.created_at}
                            tags={grocery.tags}
                        />
                    )
                })}
                {/* <AddCard/> */}
        </div>
    )
}
