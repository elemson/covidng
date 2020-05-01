import React, { Component } from "react";
import "./App.css";
import { fetchData, NigerianStates, scrapeStates, fetchMap } from "./api";
import styles from "./App.module.css";

import { Cards, CountryPicker, Chart } from "./components";
import { Nav } from "./components/Nav/Nav";
import NigerianMap from "./components/Maps/NigerianMap";
import state from "./data";
import StatesTable from "./components/States/StatesTable";
import Spinner from "./components/Spinner/Spinner";
import WorldLineChart from "./components/Chart/WorldLineChart";

export default class App extends Component {
  state = {
    data: {},
    country: {},
    state: state,
    states: [],
    scrapedMap: [],
  };

  async componentDidMount() {
    const scrapedStates = await scrapeStates();

    const fetchedData = await fetchData();
    const fetchedMap = await fetchMap;

    this.setState({ states: scrapedStates });
    this.setState({ data: fetchedData });
    this.setState({ scrapedMap: fetchedMap });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country, states, scrapedMap } = this.state;

    return (
      <div className={styles.map}>
        <Nav />

        <div className={styles.container}>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Cards data={data} />

          {data ? (
            <Chart data={data} country={country} />
          ) : (
            <div>
              loading charts...
              <Spinner />{" "}
            </div>
          )}

          {states ? <StatesTable states={states} /> : <Spinner />}

          <NigerianMap states={this.state.state} maps={scrapedMap} />
          <WorldLineChart />

          {/* <SimpleTable /> */}
        </div>
      </div>
    );
  }
}
