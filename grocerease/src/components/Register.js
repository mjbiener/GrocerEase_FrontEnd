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
            .post('https://grocerease.herokuapp.com/grocerease/register', {
                email: email,
                username: username,
                password: password,
            })
            .then((res) => {
                console.log(res)
                return axios
                    .post('https://grocerease.herokuapp.com/auth/token/login/', {
                        username: username,
                        password: password,
                    })
                    .then((data) => {
                        if (data && data.data.auth_token) {
                            setAuth(data.data.auth_token)
                        }
                    })
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
            <div className="pa4 black-80">
                <form className="sign-up_submit" onSubmit={handleSubmit}>
                    <div className="mt3">
                        <label className="db fw4 lh-copy f6">Username:</label>
                        <input className="pa2 input-reset ba bg-transparent w-100 measure" 
                            type="text"
                            placeholder="JohnSmith88"
                            value={username}
                            onChange={(e) => handleChange('username', e)}/>
                    </div>
                    <div className="mt3">
                        <label className="db fw4 lh-copy f6">Password:</label>
                        <input className="pa2 input-reset ba bg-transparent w-100 measure"
                            placeholder="password"
                            type="password"
                            value={password}
                            onChange={(e) => handleChange('password', e)}
                        />
                    </div>
                    <div className="mt3">
                        <label className="db fw4 lh-copy f6">Email:</label>
                        <input className="pa2 input-reset ba bg-transparent w-100 measure"
                            type="text"
                            placeholder="JohnSmith@gmail.com"
                            value={email}
                            onChange={(e) => handleChange('email', e)}/>
                    </div>
                    <div className="mt3">
                        <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit">
                            Create Account
                        </button>
                    </div>
                    <div className="mt3">
                        <a className="f4 fw6 db blue no-underline underline-hover" href='/forgot_username'>Forgot Username</a>
                    </div>
                </form>
            </div>
        )}