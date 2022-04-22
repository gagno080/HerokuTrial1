import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  //return default button with our own styling and constraints
  //want to make sure button type can be set from outside (where custom Button is used)
  //type must be dynamic
  //'button' is fall-back type
  //???why don't we define on.Click???
  //???content between button, use props.children
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
