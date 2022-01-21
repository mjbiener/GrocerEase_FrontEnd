import axios from "axios"
import { useNavigate } from 'react-router-dom'



const Logout = ({username, eraseAuth}) => {
    const navigate = useNavigate()
    const onClick = () => {
            axios.post('https://grocerease.herokuapp.com/auth/token/logout/', {
                username: username,
                // email: email,
            }).then (() => {
                eraseAuth()
            })
            navigate('/login')
            
    }
    
    return (
        <button onClick={onClick}>Logout</button>
    )
}

export default Logout;