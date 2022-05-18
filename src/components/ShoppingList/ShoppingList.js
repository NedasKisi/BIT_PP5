import React, { useState } from "react";
import "./ShoppingList.css";

const ShoppingList = () => {
  const [items, setitems] = useState([]);
  const [item, setitem] = useState("");
  const [itemErrorMsg, setItemErrorMsg] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    if (item === "") {
      setItemErrorMsg("Field cannot be empty");
    } else {
      setItemErrorMsg("");
      const newitem = {
      id: new Date().getTime(),
      text: item,
      completed: false,
    };
    items.push(newitem);
    localStorage.setItem("items", JSON.stringify(items));
    setitems(items);
    setitem("");
    }    
  }

  return (
    <div id="item-list">
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setitem(e.target.value)}
          value={item}
          placeholder={itemErrorMsg}
        />
        <button type="submit">Add Item</button>
      </form>
      {items.map((item) => (
        <div key={item.id} className="item">
          <div className="itemText">{item.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingList;

