import axios from "axios";
import { useEffect, useState } from "react";
import "../groceryListDetail.css";
import GroceryListItem from "./GroceryListItem";
import { useLocation, useNavigate } from "react-router-dom";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Card, CardActions, Container } from "@mui/material";

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
        setItems([
          ...items,
          {
            name: res.data.name,
            item_quantity: res.data.item_quantity,
            choices: res.data.choices,
          },
        ]);
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
          <input
            className="pa2 input-reset ba bg-transparent w-100 measure search_input list_name_category_input"
            onChange={(event) => setListName(event.target.value)}
            value={listName}
          />

          <select
            className=""
            onChange={(event) => setChoices(event.target.value)}
            value={choices}
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Baked Goods">Baked Goods</option>
            <option value="Meat and Fish">Meat and Fish</option>
            <option value="Snacks">Snacks</option>
            <option value="Alcohol">Alcohol</option>
            <option value="Baby Care">Baby Care</option>
          </select>
        </div>

        <Card style={{ backgroundColor: "#FFF8F0" }}>
          <div>
            <input
              className=" input-reset ba bg-transparent w-100 measure add_product_input"
              type="text"
              id="products"
              value={value}
              placeholder="Search for products"
              onChange={(event) => setValue(event.target.value)}
            ></input>
          </div>

          <div>
            <button
              className="add_product_button"
              onClick={onAddProduct}
              type="submit"
            >
              Add Product
            </button>
          </div>
        </Card>

        <CardActions style={{ backgroundColor: "#FFF8F0" }}>
          <div>
            <button onClick={saveList}>Save List</button>
            <button>Start Shopping</button>
          </div>
          <div style={{ backgroundColor: "#FFF8F0" }}>
            {items.map((item) => {
              return <GroceryListItem item={item} />;
            })}
          </div>
        </CardActions>
      </Container>
    </React.Fragment>
  );
};

export default GroceryListDetail;
