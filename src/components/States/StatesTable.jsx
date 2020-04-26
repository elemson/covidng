import React from "react";
import { Bar, Line } from "react-chartjs-2";
import styles from "./States.module.css";
import { Typography } from "@material-ui/core";

export default function StatesTable({ states }) {
  const lineChart = states ? (
    <Line
      data={{
        labels: states.map(({ name }) => name),
        datasets: [
          {
            data: states.map(({ cases }) => cases),
            label: "cases",
            borderColor: "rgba(0,0,255,0.5)",
          },

          {
            data: states.map(({ Discharged }) => Discharged),
            label: "recovered",
            borderColor: " rgba(0,255,0, 0.5)",
            // backgroundColor: "rgba(255, 0, 0 0.5)",
          },

          {
            data: states.map(({ deaths }) => deaths),
            label: "death",
            borderColor: "rgba(255,0,0,0.5)",
          },
        ],
      }}
    />
  ) : null;

  return (
    <>
      <div className={styles.container}>
        <Typography align="center">
          <h2 styles={{ text: "center" }}>Confirmed by Nigerian states</h2>
        </Typography>
        {lineChart}
      </div>
    </>
  );
}
