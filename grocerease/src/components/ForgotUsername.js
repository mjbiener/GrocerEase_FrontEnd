import axios from 'axios'
import React from 'react'

export default function ForgotUsername() {

    const handleSubmit = (event)=>{
        event.preventDefault()
        
        console.log(event.target)
        
        let url = 'https://jsonplaceholder' //trigger reset email
        const data = {email: event.target.email.value}
        
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
        <div className="pa4 black-80">
            <form name="measure center" onSubmit={handleSubmit}>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="">Email</label>
                    <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name='email' placeholder='johnsmit@gmail.com'/>
                </div>
                <div className="mt3">
                    <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit">submit</button>
                </div>
            </form>
            
        </div>
    )
}
