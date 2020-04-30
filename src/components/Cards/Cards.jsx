import React from "react";

import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardActions,
  Button,
} from "@material-ui/core";
import CountUp from "react-countup";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./Cards.module.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Cards = ({ data }) => {
  const classes = useStyles();
  if (!data) {
    return "Loading...";
  }
  const { cases } = data;

  const gg = Object.entries(data).map(([keyName, value]) => (
    <Grid
      item
      component={Card}
      xs={6}
      md={3}
      style={{ color: value[1] }}
      key={value}
    >
      <Card variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {keyName}
          </Typography>
          <Typography variant="h5" component="h2" style={{ color: value[1] }}>
            <CountUp start={0} end={value[0]} duration={2.5} separator="," />
          </Typography>
          <Typography className={classes.pos}>Number of {keyName}</Typography>

          {/* <Typography variant="h5" component="h2" style={{ color: value[1] }}>
            
          </Typography> */}
        </CardContent>
      </Card>
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
