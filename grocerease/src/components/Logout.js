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
            <p className="f4 fw6 db dark-blue no-underline underline-hover" onClick={onClick}>Logout</p>
        </div>
    )
}

export default Logout;