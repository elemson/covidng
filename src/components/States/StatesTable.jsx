import React from "react";
import { Bar, Line } from "react-chartjs-2";
import styles from "./States.module.css";
import { Typography, Box } from "@material-ui/core";
import Spinner from "../Spinner/Spinner";

export default function StatesTable({ states }) {
  console.log(states);
  const lineChart = states[0] ? (
    <>
      <Typography variant="h5" align="center">
        <Box fontWeight="fontWeightBold">
          Confirmed COVID-19 cases in Nigeria by state{" "}
          <Typography variant="caption" display="block" gutterBottom>
            - covidstories.herokuapp.com
          </Typography>
        </Box>{" "}
      </Typography>

      <Line
        data={{
          labels: states.map(({ states }) => states),
          datasets: [
            {
              data: states.map(({ cases }) => cases),
              label: "cases",
              borderColor: "rgba(0,0,255,0.5)",
            },

            {
              data: states.map(({ recovered }) => recovered),
              label: "recovered",
              borderColor: " rgba(0,255,0, 0.5)",
              // backgroundColor: "rgba(255, 0, 0 0.5)",
            },

            {
              data: states.map(({ death }) => death),
              label: "death",
              borderColor: "rgba(255,0,0,0.5)",
            },
          ],
        }}
      />
    </>
  ) : (
    <Spinner />
  );

  return (
    <>
      <div className={styles.container}>
        <Typography align="center">{lineChart}</Typography>
      </div>
    </>
  );
}
