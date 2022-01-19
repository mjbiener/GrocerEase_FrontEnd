import { useState, useEffect } from 'react'
import { GroceryCard } from './GroceryCard'
// import  AddCard  from './AddCard';

let fakeData = [ 
    // PROBLEM: NEEDS THE FAKEDATA THIS TO LIST ON 1 GROCERYCARD
    { 
        'list_title': "New Diet",
        'created_at': '01/19/21',
        'tags':'Vegan',
    },

    { 
        'list_title': "Mom's List",
        'created_at': '01/19/21',
        'tags':'Budget-Friendly',
    },
    { 
        'list_title': "GF's List",
        'created_at': '01/19/21',
        'tags':'Tampons',
    },
    { 
        'list_title': "Learning to Cook",
        'created_at': '01/19/21',
        'tags':'Beginners',
    },
    { 
        'list_title': "Grandma's List",
        'created_at': '01/19/21',
        'tags':'Medicine',
    },
    { 
        'list_title': "Missing Item for Tonight's Dinner",
        'created_at': '01/19/21',
        'tags':'Quick Run',
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
