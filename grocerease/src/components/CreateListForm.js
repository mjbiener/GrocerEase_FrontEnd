import { useState } from 'react'
import axios from 'axios' 
import { useNavigate } from 'react-router-dom'


export const CreateListForm= ({token, setSubmitted}) => {

    const [name, setName] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('https://grocerease.herokuapp.com/grocerease/lists/', 
        {
        name: name,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`
                }           
        }
            ).then(res => {
                navigate(`/create_list_detail?id=${res.data.pk}`)
                
        })
    }
    
        const handleChange = (inputType, event) => {
            if (inputType === 'name') {
                setName(event.target.value)
            }
        }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>List Name:</label>
                <input 
                clasName='input-field'
                type='text' 
                placeholder='List Name'
                value={name} 
                onChange={(event) => handleChange('name', event)}
                />
                <button onClick={handleSubmit}> Create New List </button>
            </form>
        </div>
    )
}
