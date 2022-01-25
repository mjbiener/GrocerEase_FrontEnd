import { useNavigate } from 'react-router-dom'
import '../groceryCard.css'

export const GroceryCard = ({ name, date_created, tags, listId }) => {
    const navigate = useNavigate()
    return (
            <div className='groceryCard'>
                <h2> {name}</h2>
                <p>{date_created} </p>
                <p> Tags: {tags}</p>
                <button 
                className='detailsButton' type='submit' to='/create_list' onClick={() => {navigate(`/create_list_detail?id=${listId}`)}}>Details</button>
            </div>
    )}
    

