import Navbar from "./Navbar";
import GroceryList from "./GroceryList";
import { CreateListForm } from "./CreateListForm";


const Mainpage = ({eraseAuth, token, username}) => {
    return (
        <>
        <div className="navbar_container">
            <Navbar eraseAuth= {eraseAuth} token={token} username= {username}/>
        </div>
        <div>
            <CreateListForm />
        </div>
        <div>
            <GroceryList />
        </div>
        </>
);
};

export default Mainpage;
