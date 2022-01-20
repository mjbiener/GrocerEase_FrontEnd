import Navbar from "./Navbar";
import GroceryList from "./GroceryList";
import { InputField } from "./ListForm";

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
            <InputField />
        </div>
        <div>
            <GroceryList />
        </div>
        </>
);
};

export default Mainpage;
