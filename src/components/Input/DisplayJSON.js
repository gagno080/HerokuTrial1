import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./DisplayJSON.module.css";

const DisplayJSON = () => {
  const [files, setFiles] = useState("");

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      console.log("e.target.result", e.target.result);
      setFiles(e.target.result);
    };
  };

  return (
    <Card className={classes.displayJSON}>
        <br />
        <label>Upload Json file</label>
        <br />
        <br />
        <input type="file" onChange={handleChange} />
        <br />
        <br />
        {"uploaded file content:"}
        <br />
        <br />
        {files}
        <br />
        <br />
    </Card>
  );
};

export default DisplayJSON;
