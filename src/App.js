import Button from "./Button";
import { useState } from "react";
import MainButton from "./MainButton";
import "./App.css";
import List from "./List";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [countMain, setCountMain] = useState(0);
  const [countList, setList] = useState("");

  const functionConsole1 = () => {
    setCount1(count1 + 1);
    //console.log(count1);
    setList(countList + "boton 1 fue clickeado; ");
  };
  const functionConsole2 = () => {
    setCount2(count2 + 1);
    // console.log(count2);
    setList(countList + "boton 2 fue clickeado; ");
  };
  const functionConsole3 = () => {
    setCount3(count3 + 1);
    // console.log(count3);
    setList(countList + "boton 3 fue clickeado; ");
  };
  const functionConsole4 = () => {
    setCount4(count4 + 1);
    //console.log(count4);
    setList(countList + "boton 4 fue clickeado; ");
  };
  const functionConsoleMain = () => {
    setCountMain(countMain + 1);
    //console.log(count4);
    setList(countList + "boton Main fue clickeado; ");
  };

  return (
    <div>
      <div className="mainButtonContainer">
        <MainButton
          click={functionConsoleMain}
          text={count1 + count2 + count3 + count4 + countMain}
        />
      </div>
      <div>
        <List text={countList} />
      </div>
      <div className="container">
        <Button id="button1" click={functionConsole1} text={count1} />
        <Button click={functionConsole2} text={count2} />
        <Button click={functionConsole3} text={count3} />
        <Button click={functionConsole4} text={count4} />
      </div>
    </div>
  );
}

export default App;
