import { Link } from "react-router-dom";
import '../homepage.css'
import { Typography, Container } from "@mui/material";


const Homepage = () => {

    return (
        <div>
            <div>
            <Container style={{backgroundColor: "#EEB61B"}}>
                <Typography variant="h3" color="#FFF8F0" gutterBottom component="div">
                Welcome to Grocerease
                </Typography>
            </Container>
            </div>
            <div className="login_button">
                <Link to='/login'>Login</Link>
            </div>
            <div className="register_button">
                <Link to='/register'>Register</Link>
            </div>
        </div>
    )
}

export default Homepage;