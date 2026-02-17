import { Button } from "bootstrap";
import Items from "./Items";
import { useState } from "react";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems;
    if(event.target.value=='Buy'){
      newItems = [...activeItems];
      if (!newItems.includes(item)) {
      newItems.push(item);
      }
    }else if(event.target.value=='Remove'){
      newItems = activeItems.filter(Curritem => Curritem !== item);
    }

    setActiveItems(newItems);
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
