import { useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
  


export default function Login ({ isLoggedIn, setAuth})  {
    const [username, setUsername] = useState('')
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
          <div className="pa4 black-80">
            <form onSubmit={handleSubmit}>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6">
                    Username 
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div className="mt3">
                      <label className="db fw4 lh-copy f6">
                      Password
                      </label>
                      <input
                          type="password"
                          id="password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div className="mt3">
                      <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit">Lets Shop</button>
                </div>
                <div className="lh-copy mt3">
                    <Link className="f4 fw6 db blue no-underline underline-hover" to="/ForgotUsername">Forgot Username</Link>
                    <Link className="f4 fw6 db blue no-underline underline-hover"to="/forgotPassword">Forgot Password</Link>
                </div>
            </form>
          </div>
  )
    }


// export default Login