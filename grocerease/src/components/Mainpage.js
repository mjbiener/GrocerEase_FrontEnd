import Navbar from "./Navbar";
import { CreateListForm } from "./CreateListForm";
import GroceryList from './SavedGroceryList'


const Mainpage = ({eraseAuth, token, username}) => {
    return (
        <>
        <div className="navbar_container">
            <Navbar eraseAuth= {eraseAuth} token={token} username= {username}/>
        </div>
        <div>
            <CreateListForm token={token}/>
        </div>
        <div>
            <GroceryList />
        </div>
        </>
);
};

export default Mainpage;
