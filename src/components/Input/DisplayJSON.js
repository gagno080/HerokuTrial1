import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./DisplayJSON.module.css";

const DisplayJSON = () => {
  const [files, setFiles] = useState("");

  /*
  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      console.log("e.target.result", e.target.result);
      setFiles(e.target.result);
      var myObject = JSON.parse("e.target.result");
      console.log(myObject.fruit);
    };
  };
  */

  const handleChange = (e) => {
    //console.log("Please do something");
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    var thing = fileReader.result;
    console.log(thing);
    fileReader.onload = (e) => {
      console.log("e.target.result", e.target.result[0], e.target.result[1]);
      console.log(e);
      setFiles(e.target.result);
    };
  };

  return (
    <Card className={classes.displayJSON}>
        <br />
        <label>Upload Json file</label>
        <br />
        <br />
        <input type="file" onChange={handleChange}/>
        {files}
        {/*
        <input type="file" onChange={handleChange} />
        <br />
        <br />
        {"uploaded file content:"}
        <br />
        <br />
        {files}
        <br />
        <br />
        */}
    </Card>
  );
};

export default DisplayJSON;
