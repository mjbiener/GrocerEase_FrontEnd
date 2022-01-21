import axios from 'axios' 
import { useState } from 'react'


// the user inputs information/text into this 
// use the create list 
export default function InputField  ({setSubmitted}) {
    const [name, setName] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault()
        axios
        .post('https://grocerease.herokuapp.com/grocerease/create_list', {
        name: name,
        
    })
    .then((res) => {
        console.log(res)
        if(res.data.auth_token) {
            setSubmitted(name, res.data.auth_token)
        }
    })
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>List Name:</label>
                <input 
                type='text' 
                id='name'
                value={name} 
                onChange={(event)=> setName(event.target.value)}
                />
                <button type='submit' to="/create_list"> Grocery List Details </button>
            </form>

        </div>
    )




}

