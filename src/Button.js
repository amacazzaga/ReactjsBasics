import React from "react";

const button = ({ text, click }) => {
  return (
    <button onClick={click}>{text}</button> //onClick, es la funcion!!!en JSX
  );
};

export default button;
