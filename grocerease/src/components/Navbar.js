
import { useState } from "react";
import '../navbar.css'
import Logout from './Logout'
import '../navbar.css'

const Navbar = ({username, eraseAuth}) => {

    return (
    
    <nav className='navbar'> 
            <Logout username={username} eraseAuth={eraseAuth} className='logout_button'/>
    </nav>
);
};

export default Navbar;
