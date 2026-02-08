import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  let foodItems = ['Dal','Vegetable','Salad','Roti','Paneer','Dahi']
  return (
    <React.Fragment>
      <h1>Delux Thali</h1>
      <ul className="list-group">
        {foodItems.map((items)=>
          (
            <li key={items} className="list-group-item">{items}</li>
          )
        )}
      </ul>
    </React.Fragment>
  );
}

export default App;
