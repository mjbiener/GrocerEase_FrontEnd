import { GroceryList } from '.components/GroceryList'
import { ImPlus } from "react-icons/fa";

export default function AddCard () {


return (
    <div className='addCard'>

        <div className='cardHeader'>
            <button className='addCard'>
                <i className='plus icon'></i>
                Add Card
            </button>
        </div>

        <GroceryList />

    </div>

)
}