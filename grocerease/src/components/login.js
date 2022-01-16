import { useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
  


export default function Login ({ isLoggedIn, setAuth})  {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault()
        axios 
        .post('https://grocerease.herokuapp.com/auth/token/login/', {
          username: username,
          password: password,
        })
        .then((res) => {
          console.log(res)
          if (res.data.auth_token) {
            setAuth(username, res.data.auth_token)
          }
        })
      }
      
        return (
        <form onSubmit={handleSubmit}>
            <div className="log">
                <label>
                Username 
                </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>

            <div className="log">
                <label>
                Password
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div>
                <button type="Submit">Lets Shop</button>
            </div>
            <Link to="/ForgotUsername">Forgot Username</Link>
            <Link to="/forgotPassword">Forgot Password</Link>
            </form>
 )
    }


// export default Login