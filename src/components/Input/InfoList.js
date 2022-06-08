import React from "react";
import Card from "../UI/Card";
import Button from '../UI/Button';
import classes from './InfoList.module.css';

const InfoList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.info.map((infoItem) => (
          <li key={infoItem.id}>
            CMD Idx: {infoItem.Cat} 
            &#123; "Category": "{infoItem.Cat}", "Arguments": &#123; "{infoItem.Comm}":
            "", "{infoItem.Time}": "", "{infoItem.Plan}": "", "{infoItem.Retry}
            ": "" &#125; &#125;
            <Button type="submit">Edit</Button>
            <Button type="submit">Delete</Button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default InfoList;
