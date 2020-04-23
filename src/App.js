import React, { Component } from "react";
import "./App.css";
import { fetchData } from "./api";
import styles from "./App.module.css";

import { Cards, CountryPicker, Chart } from "./components";
import { Nav } from "./components/Nav/Nav";

export default class App extends Component {
  state = {
    data: [],
    country: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
    console.log(this.state.data);
  };

  render() {
    const { data, country } = this.state;
    return (
      <div>
        <Nav />
        <div className={styles.container}>
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
        </div>
      </div>
    );
  }
}
