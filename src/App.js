import Button from "./Button";
import { useState } from "react";
import MainButton from "./MainButton";
import "./App.css";
import List from "./List";
function App() {
  const [countMain, setCountMain] = useState(0);
  const [countList, setList] = useState("");

  const functionConsoleMain = () => {
    setCountMain(countMain + 1);
    //console.log(count4);
    setList(countList + "boton Main fue clickeado; ");
  };
  return (
    <div>
      <div className="mainButtonContainer">
        <MainButton click={functionConsoleMain} text={countMain} />
      </div>
      <div>
        <List text={countList} />
      </div>
      <div className="container">
        <Button
          extraClick={() => {
            setCountMain(countMain + 1)
            setList(countList+" el boton 1 fue clickeado; ");
          }}
        />
        <Button
          extraClick={() => {
            setCountMain(countMain + 1);
            setList(countList+" el boton 2 fue clickeado; ");
          }}
        />
        <Button
          extraClick={() => {
            setCountMain(countMain + 1);
            setList(countList+" el boton 3 fue clickeado; ");
          }}
        />
        <Button
          extraClick={() => {
            setCountMain(countMain + 1);
            setList(countList+" el boton 4 fue clickeado; ");
          }}
        />
      </div>
    </div>
  );
}

export default App;
