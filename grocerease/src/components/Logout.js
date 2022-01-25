import axios from "axios"
import { useNavigate } from 'react-router-dom'
import '../navbar.css'


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
            <a class="f4 fw6 db dark-green no-underline underline-hover" href="#0"onClick={onClick}>Logout</a>
        </div>
    )
}

export default Logout;