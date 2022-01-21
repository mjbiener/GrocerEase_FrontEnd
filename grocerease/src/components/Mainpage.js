import Navbar from "./Navbar";
import GroceryList from "./GroceryList";


const Mainpage = ({eraseAuth, username}) => {
    return (
        <>
        <div className="navbar_container">
            <Navbar eraseAuth= {eraseAuth} username= {username}/>
        </div>
        <div>
            <GroceryList />
        </div>
        </>
);
};

export default Mainpage;
