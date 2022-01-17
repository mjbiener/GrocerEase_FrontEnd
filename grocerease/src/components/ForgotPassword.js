import { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"


export default function Passwordreset ()  {

let navigate = useNavigate();
const [email, setEmail] = useState("")

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     axios 
    //     .post('', {
    //       email: email,
    //     })
    //     .then((res) => {
    //       console.log(res)
    //       if (res.data.auth_token) {
    //         setAuth(email, res.data.auth_token)
    //       }
    //     })
    //   }
      
        return (
        <form>
            <div className="log">
                <label>
                Email 
                </label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div>
                <a href="src/components/login.js">
                <button onClick={() => {
                    navigate("/login")
                }}>Submit</button>
                </a>
            </div>
            </form>
 )
    }
