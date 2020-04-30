import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";

export const Nav = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6">CovidNG live</Typography>
          <Typography variant="subtitle1"> Update : </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
