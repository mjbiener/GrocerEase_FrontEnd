import { useState } from 'react'
import axios from 'axios'


export const Register = ({ setAuth }) => {
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        // axios call goes here
        axios
            .post('https://jsonplaceholder.typicode.com/users', {
                email: email,
                username: username,
                password: password,
            })
            .then((res) => {
                console.log(res)
                // return axios
                //     .post('', {
                //         username: username,
                //         password: password,
                //     })
                //     .then((data) => {
                //         if (data && data.data.auth_token) {
                //             setAuth(data.data.auth_token)
                //         }
                //     })
            })
        }

        const handleChange = (inputType, event) => {
            if (inputType === 'username') {
                setUsername(event.target.value)
            }
            if (inputType === 'password') {
                setPassword(event.target.value)
            }
            if (inputType === 'email') {
                setEmail(event.target.value)
            }
        }

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input
                        className=""
                        type="text"
                        placeholder="JohnSmith@gmail.com"
                        value={email}
                        onChange={(e) => handleChange('email', e)}/>
                </form>
            </div>
        )}