import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import '../login.css'

export default function Login ({ isLoggedIn, setAuth})  {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    if (isLoggedIn){
      navigate('/lists')
  }

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
          <div className="pa4 black-80 login_container">
            <form onSubmit={handleSubmit}>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6 login_label">
                    Username: 
                    </label>
                    <input className="pa2 input-reset ba bg-transparent w-100 measure login_label"
                        type="text"
                        id="username"
                        placeholder="JohnSmith88"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div className="mt3">
                      <label className="db fw4 lh-copy f6">
                      Password:
                      </label>
                      <input className="pa2 input-reset ba bg-transparent w-100 measure"
                          type="password"
                          placeholder="password"
                          id="password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div className="mt3">
                      <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit">Login</button>
                </div>
            </form>
          </div>
  )
    }


// export default Login