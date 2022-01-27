import { useNavigate } from 'react-router-dom'
import moment from 'moment'


export const GroceryCard = ({ name, date_created, tags, listId }) => {
    const navigate = useNavigate()


    return (
            <div className='card'>
                <h2> {name}</h2>
                <p>{moment(date_created).format('MMMM Do YYYY, h:mm:ss a')} </p>
                <p> Tags: {tags}</p>
                <button 
                className='detailsButton' type='submit' to='/create_list' onClick={() => {navigate(`/create_list_detail?id=${listId}`)}}>Details</button>
            </div>
    )}
    

