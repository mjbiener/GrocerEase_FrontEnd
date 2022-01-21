import Navbar from "./Navbar";
import GroceryList from "./GroceryList";


const Mainpage = () => {
    return (
        <>
        <div>
            <h1>GrocerEase</h1>
        </div>
        <div className="navbar_container">
            <Navbar />
        </div>
        <div>
            <GroceryList />
        </div>
        </>
);
};

export default Mainpage;
