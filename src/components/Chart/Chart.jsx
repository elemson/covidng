import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
import NigerianMap from "../Maps/NigerianMap";

const Chart = ({
  data: {
    cases,
    recovered,
    deaths,
    // active,
    tests,
    todayCases,
    todayDeaths,
    critical,
  },
  country,
}) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "death",
            borderColor: "red",
            // backgroundColor: "rgba(255, 0, 0 0.5)",
          },
        ],
      }}
    />
  ) : null;

  const barChart = cases ? (
    <Bar
      data={{
        labels: [
          "tests",
          "Cases",
          "Reovered",
          // "Currently infected",
          "Deaths",

          //   "Today's cases",
          //   "Today's deaths",
          //   "Critical",
        ],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "#43b67e",
              "rgba(0,0,255,0.5)",
              " rgba(0,255,0, 0.5)",
              "rgba(255,0,0,0.5)",
              "#2fc5e9",
              "rgba(255,0,0,0.5)",
              "rgba(255,0,0,0.5)",
            ],
            data: [
              tests[0],
              cases[0],
              recovered[0],
              // active[0],
              deaths[0],
              //   todayCases[0],
              //   todayDeaths[0],
              //   critical[0],
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: {
          display: true,
          //   text: `Current state in ${country}`,
        },
      }}
    />
  ) : (
    <h1>loading</h1>
  );

  return (
    <>
      <h2>Total cases of 2019–20 coronavirus pandemic</h2>
      <div className={styles.container}>{lineChart}</div>

      <div className={styles.container}>{barChart}</div>
    </>
  );
};

export default Chart;
