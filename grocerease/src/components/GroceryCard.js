import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

// shows the information that will be shown on each Grocery Card before clicking on the Details button 

export const GroceryCard = ({ token }) => {
    const { cardId } = useParams()
    console.log('Check out the Params!!', useParams())
    const [cardObj, setCardObj] = useState(null)

    useEffect(() => {
        axios 
            .get(`https://grocerease.herokuapp.com/grocerease/create_list/${cardId}`, {
                headers: {
                    // 'Content-Type': 'application/json',
                    Authorization: `token ${token}`,

                },

            })
            .then((res) => {
                setCardObj(res.data)
            })
    }, );
    
    
    const handleSubmit = () => {
        axios
        .post('https://grocerease.herokuapp.com/grocerease/create_list', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`,
            },
        })
        .then((res) => setCardObj(res.data))

    }


    return (
        <>
        {cardObj ? (
            <div className='card'>
                <h2> {cardObj.name}</h2>
                <ul>{cardObj.date_created} </ul>
                <ul> Tags: {cardObj.tags}</ul>
                <button 
                className='detailsButton' type='submit' to='/create_list' onClick={handleSubmit}>Details</button>
            </div>
    ) : (
        <div>
        <h1 classname='404-message'>Error</h1>
        </div>
    )}
    </>
    )
}

