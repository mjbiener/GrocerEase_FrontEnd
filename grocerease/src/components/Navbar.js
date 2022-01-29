import '../navbar.css'
import Logout from './Logout'
import '../navbar.css'

const Navbar = ({username, token, eraseAuth}) => {

    return (
    <div> 
        <nav className="navbar_container">
            <div className='logout_button'>
                <Logout username={username} token={token} eraseAuth={eraseAuth} className='logout_button'/>
            </div>
        </nav>
    </div>
);
};

export default Navbar;