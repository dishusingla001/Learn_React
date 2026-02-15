import { Button } from "bootstrap";
import Items from "./Items";
import { useState } from "react";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    if (event.target.value == "buy") {
      let newItems = [...activeItems, item];
      setActiveItems(newItems);
    } else if (event.target.value == "remove") {
      let newItems = [...activeItems];
      const index = newItems.indexOf(item); // Find the index of the item

      if (index > -1) {
        newItems.splice(index, 1); // Remove 1 element at the found index
      }
      
      setActiveItems(newItems);
    }
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Items
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => onBuyButton(item, event)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
