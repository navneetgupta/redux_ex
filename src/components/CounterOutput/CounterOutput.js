import React from "react";
import classes from "./CounterOutput.module.css";

const CounterOutput = props => (
  <div className={classes.CounterOutput}>Counter Value: {props.value}</div>
);

export default CounterOutput;
