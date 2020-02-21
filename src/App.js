import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SplitPane from "react-split-pane";
import Editor from "./editor.js";

function App() {
  const codeText = "# Hello World";
  return (
    <div className='App'>
      <SplitPane split='vertical' defaultSize='50%'>
        <div className='editor-pane'>
          <Editor
            className='editor'
            codeText={codeText}
          />
        </div>
        <div className='view-pane'></div>
      </SplitPane>
    </div>
  );
}

export default App;
