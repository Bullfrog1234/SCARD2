import React from "react";
import SCARD from "./Components/SCARD";
//import "./App.css";
import Logo from "./images/Airservices-transparentback.png";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    width: "calc(100% - 1em)",
    margin: "5px auto",
    paddingTop: "0.5em"
  },
  image: {
    height: "100px"
  },
  imageContainer: {
    textAlign: "center"
  },
  highlightGrid: {
    borderStyle: "solid",
    borderColor: "red"
  },
  title: {
    margin: "0px",
    padding: "0px",
    float: "left",
    width: "100%",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%) translateX(-50%)",
    left: "50%",
    textAlign: "center"
  }
});

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={12} md={3}>
          <div className={classes.imageContainer}>
            <img alt="Airservices Logo" src={Logo} className={classes.image} />
          </div>
        </Grid>

        <Grid item xs={12} md={9}>
          <Typography variant="h4" className={classes.title}>
            Safety Case Assessment and Reporting Determination (SCARD)
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <SCARD />
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(App);
