import React from "react";

const MainButton = ({ click, text }) => {
  return (
    <button className="mainButton" onClick={click}>
      {text}
    </button>
  );
};

export default MainButton;
