import React, { useEffect, useState } from "react";
import "./ShoppingList.css";

const ShoppingList = () => {
  const [items, setitems] = useState([]);
  const [item, setitem] = useState("");
  const [itemErrorMsg, setItemErrorMsg] = useState("")
  

  useEffect(() => {
    const loadeditems = JSON.parse(localStorage.getItem("items"));
    if (loadeditems) {
      setitems(loadeditems || []);
    }
  }, []);


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

  function deleteitem(id) {
    let updateditems = items.filter((item) => item.id !== id);
    localStorage.setItem("items", JSON.stringify(updateditems));
    setitems(updateditems);
  }

  function toggleComplete(id) {
    let updateditems = items.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    localStorage.setItem("items", JSON.stringify(updateditems));
    setitems(updateditems);
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
          <div className="item-text">
            <input
              type="checkbox"
              id="completed"
              checked={item.completed}
              onChange={() => toggleComplete(item.id)}
            />
              <div className="itemText">{item.text}</div>
          </div>
          <div className="item-actions">
            <button onClick={() => deleteitem(item.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingList;