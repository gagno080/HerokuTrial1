import React from "react";
import contacts from './testData.json';

const ReadInfo = (props) => {
  return (
    <ul>
      {contacts.map((el) => (
        <li key={el.id}>
          {el.firstname} {el.lastname}
          {el.phone}
          {el.email}
        </li>
      ))}
    </ul>
  );
};

export default ReadInfo;
