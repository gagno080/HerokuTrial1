import React from "react";
import Card from "../UI/Card";
import classes from './InfoList.module.css';

const InfoList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.info.map((infoItem) => (
          <li key={infoItem.id}>
            &#123; "Category": "{infoItem.Cat}", "Arguments": &#123; "{infoItem.Comm}":
            "", "{infoItem.Time}": "", "{infoItem.Plan}": "", "{infoItem.Retry}
            ": "" &#125; &#125;
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default InfoList;
