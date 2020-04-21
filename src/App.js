import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchData } from "./api";

import { Cards, CountryPicker, Chart } from "./components";

function App() {
  return (
    <div className="App">
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
