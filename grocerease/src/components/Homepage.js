import { Link } from "react-router-dom";

const Homepage = () => {

return (

        <div>
            <div>
                <header>
                    Welcome to Grocerease
                </header>
            </div>
            <div>
                <p>Brief Decription</p>
            </div>
            <div>
                <Link to='/login'>Login</Link>
            </div>
            <div>
                <Link to='/register'>Register</Link>
            </div>
            
            
            
        </div>
)}

export default Homepage;