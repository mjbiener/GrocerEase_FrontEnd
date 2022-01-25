import '../navbar.css'
import Logout from './Logout'
import '../navbar.css'

const Navbar = ({username, token, eraseAuth}) => {

    return (
    <div className="pa3 pa4-ns navbar_container">
        <nav>
            <div className='title'>
                <h1>Grocerease</h1>
            </div> 
            <div className='logout_button'>
                <Logout username={username} token={token} eraseAuth={eraseAuth} className='logout_button'/>
            </div>
        </nav>
    </div>
);
};

export default Navbar;
