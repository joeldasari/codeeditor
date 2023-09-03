import React from "react";

const Javascript = ({ setJavascript }) => {
  return (
    <div className="box">
      <span>JS</span>
      <textarea onChange={(e) => setJavascript(e.target.value)} />
    </div>
  );
};

export default Javascript;
