import React from "react";
import "./Title.css"; // Normal CSS import

function Title({ text1, text2 }) {
  return (
    <div className="title-wrapper">
      <p className="title-text">
        {text1}
        <span className="highlight">{text2}</span>
      </p>
      <p className="line"></p>
    </div>
  );
}

export default Title;



