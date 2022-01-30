import { useState } from "react";
import axios from "axios";
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../groceryListItem.css';

const GroceryListItem = ({ item, token, onGrabList }) => {
  console.log(item);
  const [itemCount, setItemCount] = useState(item.item_quantity);

  const deleteItem = (item) => {
    axios
      .delete(
        `https://grocerease.herokuapp.com/grocerease/delete_item/${item.pk}/`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${token}`,
          },
        }
      )
      .then(() => {
        console.log("here");
        onGrabList();
      });
  };

  const handleUpdateQuantity = (event) => {
    axios.patch(
      `https://grocerease.herokuapp.com/grocerease/item_detail/${item.pk}/`,
      { item_quantity: itemCount },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`,
        },
      }
    );
  };

  return (
    <Card className="grocery_list">
        <IconButton 
        aria-label="delete"
            onClick={(event) => {
              event.preventDefault();
              deleteItem(item);
            }}>
            <DeleteIcon />
          </IconButton>
          <CardContent className='cardContent'>
          <h2 className="item_name">{item.name}</h2>
            <input
              className="item_count"
              type="number"
              value={itemCount}
              onChange={(event) => setItemCount(event.target.value)}
              onBlur={handleUpdateQuantity}
            >
            </input>
            <p className="count">ct.</p>
          <p>{item.choices}</p>
          </CardContent>
    </Card>
  );
};

export default GroceryListItem;
