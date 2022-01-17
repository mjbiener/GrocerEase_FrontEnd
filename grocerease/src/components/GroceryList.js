import { useState, useEffect } from 'react'
import { GroceryCard } from './GroceryCard'

let fakeData = [
    {
        'category': 'Produce',
        'name': 'Cucumber',
        'image': 'image'
    },
]

export const GroceryList = () => {
    const [groceryList, setGroceryList] = useState(null)

    useEffect(() => {
        setGroceryList(fakeData)

    }, [])

    return (
        <>

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
        </>
    )
}

export default GroceryList