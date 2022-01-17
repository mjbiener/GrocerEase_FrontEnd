import axios from 'axios'
import React from 'react'

export default function ForgotUsername() {

    const handleSubmit = (event)=>{
        event.preventDefault()

        console.log(event.target)
        
        let url = 'https://jsonplaceholder' //trigger reset email
        const data = {email: event.target.email.value}
        //inside your email
    

        //click this link to reset http://yout/resset?jwt_token=jwt_string

        axios.post(url, data)
        .then((response)=> {
            //route to homescreen
            console.log(response.json())
        })
        .catch(error=> {
            //show errors on the screen
            console.error(error)
        })
    
    }
    return (
        <div>
            <form name='form_forgot_username' onSubmit={handleSubmit}>
                <div className="formgroup">
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' placeholder='johnsmit@gmail.com'/>
                </div>
                <div className="formgroup">
                    <button type="submit">submit</button>
                </div>
            </form>
            
        </div>
    )
}
