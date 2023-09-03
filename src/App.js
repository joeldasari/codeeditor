import "./App.scss";
import Html from "./components/html";
import Css from "./components/css";
import Javascript from "./components/javascript";
import Output from "./components/output";
import { useState } from "react";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [javascript, setJavascript] = useState("");

  return (
    <div className="App">
      <div className="header">
        <h1>Code Editor</h1>
      </div>
      <div className="body">
        <div className="editors">
          <Html setHtml={setHtml} />
          <Css setCss={setCss} />
          <Javascript setJavascript={setJavascript} />
        </div>
        <Output html={html} css={css} javascript={javascript} />
      </div>
    </div>
  );
}

export default App;
