import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import '../groceryCard.css'

export const GroceryCard = ({ name, date_created, tags, listId, onDelete }) => {
    const navigate = useNavigate()


    return (
        <div className='groceryCard'>
            <div onClick={() => {navigate(`/create_list_detail?id=${listId}`)}}>
                <h2> {name}</h2>
                <p>{moment(date_created).format('MMMM Do YYYY, h:mm:ss a')} </p>
            </div>
            <i className='fas fa-times-circle fa' onClick={(event) => {
                    event.preventDefault()
                    onDelete(listId)
                    }}>
            </i>
        </div>
    )}
    

