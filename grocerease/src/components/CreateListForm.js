import { useState } from 'react'
import axios from 'axios' 


// the user inputs information/text into this 
// use the create list 
// the input field to create a new list
// update: nothing is showing on the /lists screen now 
export const CreateListForm= ({token, setSubmitted}) => {
    const [name, setName] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('https://grocerease.herokuapp.com/grocerease/create_list/', 
        {
        name: name,
        
        },
        // {
        //     // added the headers portion
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization: `token ${token}`

        //     }
    // }
    ).then(res => {
        // console.log(res)
        // if(res.data.auth_token) {
        //     setSubmitted(name, res.data.auth_token)
        setSubmitted(true)
        setName('')
        return res
        })
    }
    // added handle change
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
                <button onClick={handleChange} to='/create_list'> Create New List </button>
            </form>
{/* after clicking on this button the user should be directed to create a new list / the list details page */}
        </div>
    )
}
