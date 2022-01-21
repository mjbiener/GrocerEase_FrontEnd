import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Logout = ({username, token, eraseAuth}) => {
    const navigate = useNavigate()
    const onClick = () => {
            axios.post('https://grocerease.herokuapp.com/auth/token/logout/', {}, {
                headers: {
                    Authorization: `token ${token}`,
                }
            }).then (() => {
                eraseAuth()
            })
            navigate('/login')
            
    }
    
    return (
        <div>
            <button onClick={onClick}>Logout</button>
        </div>
    )
}

export default Logout;