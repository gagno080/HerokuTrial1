import React from "react";
import classes from './Card.module.css'; //for non module file don't use classes from

const Card = (props) => {
    //use claaName w/ div bc defualt comp
    //must make sure Card can take in a className prop
    return(<div className={`${classes.card} ${props.className}`}>{props.children}</div>);

};

export default Card;