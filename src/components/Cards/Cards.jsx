import React from "react";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";

const Cards = ({ data }) => {
  if (!data) {
    return "Loading...";
  }

  const gg = Object.entries(data).map(([keyName, value]) => (
    <Grid
      item
      component={Card}
      xs={12}
      md={3}
      style={{ color: value[1] }}
      className={cx(styles.card)}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {keyName}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={value[0]} duration={2.5} separator="," />
        </Typography>
        <Typography color="textSecondary">
          {new Date(value[0]).toDateString()}
        </Typography>
        <Typography variant="body2">Number of {keyName}</Typography>
      </CardContent>
    </Grid>
  ));

  return (
    <div className={styles.container} justify="center">
      <Grid container md={12} justify="center" spacing={3} gutterBottom>
        {gg}
      </Grid>
    </div>
  );
};

export default Cards;
