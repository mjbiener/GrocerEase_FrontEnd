import { useState } from 'react'

// the user inputs information/text into this 
export const InputField = () => {
    const [text, setText] = useState('')
    const handleChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <input type='text' value={text} onChange={handleChange} />
            <div>
                <h3>Label Name:</h3>
                <p>{text}</p>

            </div>
            <button type='submit' value='submit'> Create a New List </button>
        
        </>
    )

}