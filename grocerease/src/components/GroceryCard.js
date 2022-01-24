import { useNavigate } from 'react-router-dom'


export const GroceryCard = ({ name, date_created, tags, listId }) => {
    const navigate = useNavigate()
    return (
            <div className='card'>
                <h2> {name}</h2>
                <ul>{date_created} </ul>
                <ul> Tags: {tags}</ul>
                <button 
                className='detailsButton' type='submit' to='/create_list' onClick={() => {navigate(`/create_list_detail?id=${listId}`)}}>Details</button>
            </div>
    )}
    

