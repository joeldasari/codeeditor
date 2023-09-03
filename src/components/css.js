import React from "react";

const Css = ({ setCss }) => {
  return (
    <div className="box">
      <span>CSS</span>

      <textarea onChange={(e) => setCss(e.target.value)} />
    </div>
  );
};

export default Css;
