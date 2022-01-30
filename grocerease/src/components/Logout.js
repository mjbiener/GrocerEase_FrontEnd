import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../navbar.css";

const Logout = ({ username, token, eraseAuth }) => {
  const navigate = useNavigate();
  const onClick = () => {
    axios
      .post(
        "https://grocerease.herokuapp.com/auth/token/logout/",
        {},
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      )
      .then(() => {
        eraseAuth();
      });
    navigate("/login");
  };

  return (
    <div>
      <i
        class="f4 fw6 db dark-blue no-underline underline-hover logout_button"
        href="#0"
        onClick={onClick}
      >
        Logout
      </i>
    </div>
  );
};

export default Logout;
