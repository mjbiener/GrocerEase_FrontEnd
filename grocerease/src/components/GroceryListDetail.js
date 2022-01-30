import axios from "axios";
import { useEffect, useState } from "react";
import "../groceryListDetail.css";
import GroceryListItem from "./GroceryListItem";
import { useLocation, useNavigate } from "react-router-dom";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Card, CardActions, Container, TextField, Select, MenuItem, InputLabel, Button } from "@mui/material";

const GroceryListDetail = ({ token }) => {
  const location = useLocation();
  let listId = location.search.split("=")[1];
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const [listName, setListName] = useState("");
  const [choices, setChoices] = useState("Produce");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://grocerease.herokuapp.com/grocerease/list_detail/${listId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${token}`,
          },
        }
      )
      .then((res) => {
        setListName(res.data.name);
      });
    axios
      .get(
        `https://grocerease.herokuapp.com/grocerease/lists/${listId}/items/`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res, "get items");
        const newItems = [...items, ...res.data];
        setItems(newItems);
      });
  }, []);

  const GrabList = () => {    
    axios.get(`https://grocerease.herokuapp.com/grocerease/lists/${listId}/items/`,
    {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `token ${token}`
        }
    })
    .then (res => {
        setItems(res.data)
    })
}

  const onAddProduct = (event) => {
    event.preventDefault();
    console.log(choices);
    axios
      .post(
        `https://grocerease.herokuapp.com/grocerease/lists/${listId}/items/`,
        {
          name: value,
          quantity: 1,
          choices: choices,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res, "items endpoint");
        setItems([...items, res.data]);
      });
  };
  const saveList = () => {
    axios
      .patch(
        `https://grocerease.herokuapp.com/grocerease/edit_list/${listId}/`,
        {
          name: listName,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${token}`,
          },
        }
      )
      .then(() => {
        navigate("/lists");
      });
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <Container style={{ backgroundColor: "#FFF8F0" }}>
        <div className="list_detail_container">
          <TextField
            id="outlined-basic" label="List Name" variant="outlined"
            onChange={(event) => setListName(event.target.value)}
            value={listName}
          />
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={(event) => setChoices(event.target.value)}
            value={choices}
          >
            <MenuItem value="Produce">Produce</MenuItem>
            <MenuItem value="Dairy">Dairy</MenuItem>
            <MenuItem value="Baked Goods">Baked Goods</MenuItem>
            <MenuItem value="Meat and Fish">Meat and Fish</MenuItem>
            <MenuItem value="Snacks">Snacks</MenuItem>
            <MenuItem value="Alcohol">Alcohol</MenuItem>
            <MenuItem value="Baby Care">Baby Care</MenuItem>
          </Select>
        </div>

        <Card style={{ backgroundColor: "#FFF8F0" }}>
          <div>
          <TextField
              id="outlined-basic" variant="outlined"
              value={value}
              placeholder="Search for products"
              onChange={(event) => setValue(event.target.value)}
            ></TextField>
          </div>

          <div>
            <Button
              variant="outlined"
              onClick={onAddProduct}
              type="submit"
            >
              Add Product
            </Button>
          </div>
        </Card>

        <CardActions style={{ backgroundColor: "#FFF8F0" }}>
          <div>
            <button onClick={saveList}>Save List</button>
            <button onClick={() => navigate(`/go_shopping?id=${listId}`)}>
              Start Shopping
            </button>
          </div>
          <div style={{ backgroundColor: "#FFF8F0" }}>
            {items.map((item) => {
              return <GroceryListItem onGrabList={GrabList} item={item} token={token} />;
            })}
          </div>
        </CardActions>
      </Container>
    </React.Fragment>
  );
};

export default GroceryListDetail;
