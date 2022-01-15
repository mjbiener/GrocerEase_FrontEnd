import { useState, useEffect } from 'react'
import { GroceryCard } from './GroceryCard'

let fakeData = [ 
    // PROBLEM: NEEDS THE FAKEDATA THIS TO LIST ON 1 GROCERYCARD
    { 
        'category': 'Produce',
        'name': 'Cucumber',
        'image': 'image'
    },

    {
        'category': 'Dairy',
        'name': 'Milk',
        'image': 'image'
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
                            pk={grocery.pk}
                            category={grocery.category}
                            name={grocery.name}
                            image={grocery.image}
                        />
                    )
                })}
        </div>
    )
}
