import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SplitPane from "react-split-pane";
import Editor from "./editor.js";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("# xpto");

  const onMarkdownChange = md => {
    setMarkdown(md);
  };

  return (
    <div className='App'>
      <SplitPane split='vertical' defaultSize='50%'>
        <div className='editor-pane'>
          <Editor
            className='editor'
            markdown={markdown}
            onChange={onMarkdownChange}
          />
        </div>
        <div className='view-pane'>
          <div className='view-pane'>
            <ReactMarkdown className='result' source={markdown} />
          </div>
        </div>
      </SplitPane>
    </div>
  );
}

export default App;
