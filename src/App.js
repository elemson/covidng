import React, { Component } from "react";
import "./App.css";
import { fetchData, NigerianStates } from "./api";
import styles from "./App.module.css";

import { Cards, CountryPicker, Chart } from "./components";
import { Nav } from "./components/Nav/Nav";
import NigerianMap from "./components/Maps/NigerianMap";
import state from "./data";
import StatesTable from "./components/States/StatesTable";

export default class App extends Component {
  state = {
    data: {},
    country: {},
    state: state,
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div>
        <Nav />

        <div className={styles.container}>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Cards data={data} />
          <Chart data={data} country={country} />
          <StatesTable states={this.state.state} />
          <NigerianMap states={this.state.state} />
        </div>
      </div>
    );
  }
}
