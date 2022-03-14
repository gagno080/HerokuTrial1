import React, { useState } from "react";
import AddInfo from "./components/Input/AddInfo"; //correct directory?
import InfoList from "./components/Input/InfoList";
import Card from "./components/UI/Card";
import ReadInfo from './components/Input/ReadInfo';

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
      <screenLeft>
        <h1>SSRL Commnad Deck GUI</h1>
      </screenLeft>
      <Card>
        <screenLeft>
          &#123; "Category": "", "Arguments": &#123; "Command": "", "Timeout":
          "", "Command Plan": "", "# of Retries": "" &#125; &#125;
        </screenLeft>
      </Card>
      <AddInfo onAddInfo={addInfoHandler} />
      <InfoList info={infoList} />{" "}
      {/*will forward infoList to InfoList component*/}
      <ReadInfo/>
    </div>
  );
}

export default App;
