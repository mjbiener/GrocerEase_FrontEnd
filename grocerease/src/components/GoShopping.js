import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CheckListItem from "./CheckListItem";

const GoShopping = ({ token }) => {
  const location = useLocation();
  let listId = location.search.split("=")[1];
  const [listName, setListName] = useState("");
  const [items, setItems] = useState([]);
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
        const newItems = [...items, ...res.data];
        setItems(newItems);
      });
  }, []);
  return (
    <>
      <h1>{listName}</h1>
      <div>
        {items.map((item) => {
          return <CheckListItem item={item} />;
        })}
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/lists");
          }}
        >
          Done Shopping
        </button>
      </div>
    </>
  );
};

export default GoShopping;
