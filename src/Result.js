import React from "react";

export function Result({ Win, resetClick, playerOne }) {
  const spanStyle = {
    color: Win === playerOne ? "Green" : "Red",
  };
  return (
    <div className="buttonContent">
      {Win?<h1>
        Winner is: <span style={spanStyle}>{Win}</span>
      </h1>:""}
      <button className="btn" onClick={() => resetClick()} type="button">
        Reset
      </button>
    </div>
  );
}