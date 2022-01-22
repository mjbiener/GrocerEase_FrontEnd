import { Link } from "react-router-dom";
import '../homepage.css'

const Homepage = () => {

return (
        <div>
            <div>
                <header>Welcome to Grocerease</header>
            </div>
                <div className="login_button">
                    <Link to='/login'>Login</Link>
                </div>
                <div className="register_button">
                    <Link to='/register'>Register</Link>
                </div>
        </div>
)}

export default Homepage;