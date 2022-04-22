import React, { useState } from "react";
import AddInfo from "./components/Input/AddInfo"; //correct directory?
import InfoList from "./components/Input/InfoList";
import Card from "./components/UI/Card";
import ReadInfo from "./components/Input/ReadInfo";
import DemoOutput from "./components/Input/DemoOutput";
//import Button from './components/UI/Button';
import axios from "axios";


//LEARNING GIT HUB

function App() {
  const [infoList, setInfoList] = useState([]);

  const addInfoHandler = (cat, comm, time, plan, retry) => {
    setInfoList((prevInfoList) => {
      return [
        ...prevInfoList,
        {
          Cat: cat,
          Comm: comm,
          Time: time,
          Plan: plan,
          Retry: retry,
          id: Math.random().toString(),
        },
      ];
    });
  };


  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
    console.log(selectedFile);
    try {
        const response = await axios({
        method: "post",
        url: "/api/upload/file",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
    }
  }


  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
    //console.log(event.target.files);
    //console.log(event);
  }

  return (
    <div>
      <screenLeft>
        <h1>SSRL Commnad Deck GUI</h1>
      </screenLeft>
      <DemoOutput />
      <AddInfo onAddInfo={addInfoHandler} />
      <InfoList info={infoList} />{" "}
      {/*will forward infoList to InfoList component*/}
      <ReadInfo />
      <Card>
        <form onSubmit={handleSubmit}>
          <input type="file" onClick={handleFileSelect} />
          <input type="submit" value="Upload File" />
        </form>
      </Card>
    </div>
  );
  }

export default App;