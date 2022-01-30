import { Link } from "react-router-dom";
import "../homepage.css";
import { Typography, Container } from "@mui/material";

const Homepage = () => {
  return (
    <div>
      <div>
        <Container style={{ backgroundColor: "#EEB61B" }}>
          <Typography variant="h3" color="#FFF8F0" gutterBottom component="div">
            Welcome to Grocerease
          </Typography>
          <Typography variant="h5" color="#FFF8F0" gutterBottom component="div">
            Quick, Fast & A Breeze, Shop With GrocerEase
          </Typography>
        </Container>
      </div>

      <Container style={{ backgroundColor: "#EEB61B" }}>
        <Link to="/login">Login</Link>
      </Container>
      <Container style={{ backgroundColor: "#EEB61B" }}>
        <Link to="/register">Register</Link>
      </Container>
    </div>
  );
};

export default Homepage;
