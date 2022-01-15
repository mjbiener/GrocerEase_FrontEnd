import { useState } from 'react'
import { requestLogin } from '../ajax' 
  


const Login = ({ isLoggedIn, setAuth}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault()
        // axios.post(someUrl).then(data=> setSomeState(data))
        // here is my FAKE REQUEST PLACEHOLDER
        requestLogin(username, password)
          .then((data) => {
            // if we have a response and it includes the auth_token key
            if (data && data.auth_token) {
              // update the parent's state to include auth token
              setAuth(username, data.auth_token)
            }
          })
        //   .catch((error) => setErrors(error.message))
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
            <a href="/">Forgot Username</a> 
            <a href="/">Forgot Password</a>
            </form>
 )
    }


export default Login