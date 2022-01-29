import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../createListForm.css'


export const CreateListForm = ({ token }) => {

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
        <>
            <div className='createListForm_container'>
                <div>
                    <form onSubmit={handleSubmit}>
                    <label>List Name:</label>
                        <input className="createListInput"
                        type='text' 
                        placeholder="List's Name"
                        value={name} 
                        onChange={(event) => handleChange('name', event)}
                        />
                    </form>
                </div>
                <div>
                    <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 createListFormButton" onClick={handleSubmit}> Create New List </button>
                </div>

            </div>
            
        </>
    )
}
