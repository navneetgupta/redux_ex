import React from "react";
import classes from "./CounterControl.module.css";

const CounterControl = props => {
  return (
    <div className={classes.CounterControl} onClick={props.clicked}>
      {props.label}
    </div>
  );
};

export default CounterControl;
