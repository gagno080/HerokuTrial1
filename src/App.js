import React, { useState } from "react";
import AddInfo from "./components/Input/AddInfo"; //correct directory?
import InfoList from "./components/Input/InfoList";
import DemoOutput from "./components/Input/DemoOutput";
import DisplayJSON from "./components/Input/DisplayJSON";
import Title from "./components/Input/Title";
import TestApple1 from "./components/Input/TestApple1";

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

  return (
    <div>
      <Title />
      <DemoOutput />
      <AddInfo onAddInfo={addInfoHandler} />
      <InfoList info={infoList} />{" "}
      <DisplayJSON />
      <TestApple1 />
    </div>
  );
}

export default App;
