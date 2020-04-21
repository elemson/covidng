import "./App.css";
import { fetchData } from "./api";
import styles from "./App.module.css";

import { Cards, CountryPicker, Chart } from "./components";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <div className={styles.container}>
          <Cards data={data} />
          <CountryPicker />
          <Chart />
        </div>
      </div>
    );
  }
}
