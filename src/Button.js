import React, { useState } from "react";

const Button = ({ extraClick }) => {
  const [count, setCount] = useState(0);
  return (
    <button
      className="buttons"
      onClick={() => {
        setCount(count + 1);
        extraClick();
      }}
    >
      {count}
    </button> //onClick, es la funcion!!!en JSX
  );
};

export default Button;
