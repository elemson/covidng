import React from "react";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

import styles from "./Cards.module.css";

const Cards = ({ data }) => {
  if (!data) {
    return "Loading...";
  }

  const gg = Object.entries(data).map(([keyName, value]) => (
    <Grid
      item
      component={Card}
      xs={6}
      md={3}
      style={{ color: value[1] }}
      key={value}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {keyName}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={value[0]} duration={2.5} separator="," />
        </Typography>
        <Typography color="textSecondary"> {".."}</Typography>
        <Typography color="textSecondary">Number of {keyName}</Typography>
      </CardContent>
    </Grid>
  ));

  return (
    <div className={styles.container} justify="center">
      <Grid container justify="center">
        {gg}
      </Grid>
    </div>
  );
};

export default Cards;
