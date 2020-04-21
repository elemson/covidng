import "./App.css";
import { fetchData } from "./api";
import styles from "./App.module.css";

import { Cards, CountryPicker, Chart } from "./components";

import React, { Component } from "react";

export default class App extends Component {
  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <Cards />
          <CountryPicker />
          <Chart />
        </div>
      </div>
    );
  }
}
