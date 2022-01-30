import Navbar from "./Navbar";
import CreateListForm from "./CreateListForm";
import SavedGroceryList from './SavedGroceryList'


const Mainpage = ({eraseAuth, token, username}) => {
    return (
        <>
        <div className="title_container">
            <h1 className='title'>GrocerEase</h1>
        </div>
        <div>
            <Navbar eraseAuth= {eraseAuth} token={token} username= {username}/>
        </div>
        <div>
            <CreateListForm token={token}/>
        </div>
        <div>
            <SavedGroceryList token={token} />
        </div>
        </>
);
};

export default Mainpage;
