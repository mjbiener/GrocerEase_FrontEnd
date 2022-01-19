import { Link } from "react-router-dom";
import { useState } from "react";
import '../navbar.css'

const Navbar = () => {
    const [revealed, setRevealed] = useState(false);

    return (
    
    <nav className='navbar'> 
        <button className='navbar_button' onClick={() => setRevealed(!revealed)}>Menu</button>
        {revealed ? (
        <>
            <Link className='forgot_password_button' to="/forgot_password">Change Password/</Link>
            <Link className='logout_button' to="/logout">Logout/</Link>
        </>
        ) : null}
    </nav>
);
};

export default Navbar;
