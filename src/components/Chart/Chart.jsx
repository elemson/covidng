import React from "react";
import { Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

import { Typography } from "@material-ui/core";
import Spinner from "../Spinner/Spinner";

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
    <Spinner />
  );

  return (
    <>
      <div className={styles.container}>
        <Typography align="center">{barChart}</Typography>
      </div>
    </>
  );
};

export default Chart;
