import { useState } from 'react'

// the user inputs information/text into this 
export const InputField = () => {
    const [text, setText] = useState('')
    
    const handleChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div>
                <label>List Name:</label>
                <input type='text' value={text} onChange={handleChange} />
                <button type='submit' value='submit'> Create a New List </button>
            </div>

        </>
    )




}