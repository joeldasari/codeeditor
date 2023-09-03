import React from "react";

const Output = ({ html, css, javascript }) => {
  const output = `<html><head><style>${css}</style></head><body>${html}</body><script>${javascript}</script>`;
  return (
    <div className="output-box">
      <iframe title="output" srcDoc={output}></iframe>
    </div>
  );
};

export default Output;
