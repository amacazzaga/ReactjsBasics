import Button from "./Button";
import { useState } from "react";
import MainButton from "./MainButton";
import "./App.css";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [countMain, setCountMain] = useState(0);

  const functionConsole1 = () => {
    setCount1(count1 + 1);
    //console.log(count1);
  };
  const functionConsole2 = () => {
    setCount2(count2 + 1);
   // console.log(count2);
  };
  const functionConsole3 = () => {
    setCount3(count3 + 1);
   // console.log(count3);
  };
  const functionConsole4 = () => {
    setCount4(count4 + 1);
    //console.log(count4);
  };
  const functionConsoleMain = () => {
    setCountMain(countMain + 1);
    //console.log(count4);
  };

  

  return (
    <div>
      <div className="mainButtonContainer">
        <MainButton  click = {functionConsoleMain} text={count1+count2+count3+count4+countMain}/>
      </div>
      <div className="container">
      <Button click={functionConsole1} text={count1} />
      <Button click={functionConsole2} text={count2} />
      <Button click={functionConsole3} text={count3} />
      <Button click={functionConsole4} text={count4} />
      </div>
    </div>
  );
}

export default App;
