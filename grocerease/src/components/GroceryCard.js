import { useNavigate } from 'react-router-dom'
import '../groceryCard.css'

export const GroceryCard = ({ name, date_created, tags, listId, onDelete }) => {
    const navigate = useNavigate()
    return (
        <div className='groceryCard'>
            <div onClick={() => {navigate(`/create_list_detail?id=${listId}`)}}>
                <h2> {name}</h2>
                <p>{date_created} </p>
            </div>
            <i className='fas fa-times-circle fa' onClick={(event) => {
                    event.preventDefault()
                    onDelete(listId)
                    }}>
            </i>
        </div>
    )}
    

