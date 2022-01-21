import React from 'react'

const AddCard = () => {
    return (
        // allows the user to type in an item 
        <div className='newCard'>
            <textarea
                rows='8'
                colums='10'
                placeholder='Type to add an item'
            ></textarea>
        {/* the buttons on the bottom of each card that saves or lets the user start shopping journey */}
            <div className='cardFooter'>
                <button className='save'>Save</button>
                <button className='shop'>Start Shopping</button>
            </div>
        </div>
    );
};

export default AddCard;