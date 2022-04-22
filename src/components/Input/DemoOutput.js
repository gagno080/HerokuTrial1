import React from "react";
import Card from '../UI/Card';
import classes from './DemoOutput.module.css';

const DemoOutput = (props) => {
  return (
    <Card className = {classes.demo} >
        &#123; "Category": "", "Arguments": &#123; "Command": "", "Timeout": "",
        "Command Plan": "", "# of Retries": "" &#125; &#125;
    </Card>
  );
};

export default DemoOutput;
