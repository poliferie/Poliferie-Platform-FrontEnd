import React from "react";

export default function RangeSlider() {
  return (
    <div className={"rangeslider"}>
      <p>Range</p>
      <input type="range" name="range" id="range" min="0" max="1024" />
    </div>
  );
}
