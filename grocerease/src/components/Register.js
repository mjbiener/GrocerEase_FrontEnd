import { useState } from 'react';
import axios from 'axios';
import '../register.css';

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
            <div className='register_container'>
                <form className='register_form' onSubmit={handleSubmit}>
                    <div className='username_container'>
                        <label className="username_label">Username:</label>
                        <input className='username_input' 
                            type="text"
                            placeholder="JohnSmith88"
                            value={username}
                            onChange={(e) => handleChange('username', e)}/>
                    </div>
                    <div className='password_container'>
                        <label className='password_label'>Password:</label>
                        <input className="password_input"
                            placeholder="password"
                            type="password"
                            value={password}
                            onChange={(e) => handleChange('password', e)}
                        />
                    </div>
                    <div className='email_container'>
                        <label className='email_label'>Email:</label>
                        <input className='email_input'
                            type="text"
                            placeholder="JohnSmith@gmail.com"
                            value={email}
                            onChange={(e) => handleChange('email', e)}/>
                    </div>
                    <div>
                        <button type="submit">
                            Create Account
                        </button>
                    </div>
                    <a href='/forgot_username'>Forgot Username</a>
                </form>
            </div>
        )}