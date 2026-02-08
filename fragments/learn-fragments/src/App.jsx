import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <h1>Delux Thali</h1>
      <ul class="list-group">
        <li class="list-group-item">Dal</li>
        <li class="list-group-item">Vegetable</li>
        <li class="list-group-item">Salad</li>
        <li class="list-group-item">Roti</li>
        <li class="list-group-item">Paneer</li>
        <li class="list-group-item">Dahi</li>
      </ul>
    </React.Fragment>
  );
}

export default App;
