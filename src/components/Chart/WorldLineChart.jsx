import React, { useState, useEffect } from "react";
import styles from "./Chart.module.css";
import { fetchDailyData } from "../../api";
import { Line } from "react-chartjs-2";
import { Typography } from "@material-ui/core";

const WorldLineChart = () => {
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

  return (
    <>
      <div className={styles.container}>
        <Typography align="center">
          <h2 styles={{ text: "center" }}>
            Total World cases of 2019–20 coronavirus pandemic{" "}
            <Typography variant="caption" display="block" gutterBottom>
              - covidstories.herokuapp.com
            </Typography>
          </h2>
        </Typography>
        {lineChart}
      </div>
    </>
  );
};

export default WorldLineChart;
