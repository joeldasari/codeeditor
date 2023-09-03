import React from "react";

const Html = ({ setHtml }) => {
  return (
    <div className="box">
      <span>HTML</span>
      <textarea onChange={(e) => setHtml(e.target.value)} />
    </div>
  );
};

export default Html;
