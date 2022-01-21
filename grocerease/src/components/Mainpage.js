import Navbar from "./Navbar";
import GroceryList from "./GroceryList";
import { InputField } from "./InputField";


const Mainpage = ({eraseAuth, token, username}) => {
    return (
        <>
        <div className="navbar_container">
            <Navbar eraseAuth= {eraseAuth} token={token} username= {username}/>
        </div>
        <div>
            <InputField />
        </div>
        <div>
            <GroceryList />
        </div>
        </>
);
};

export default Mainpage;
