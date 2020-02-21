import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SplitPane from "react-split-pane";
import Editor from "./editor.js";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

function App() {
  const [markdown, setMarkdown] = useState(
    "# xpto\n\n```javascript\nconst function = () =>{\n}\n```"
  );

  const onMarkdownChange = md => {
    setMarkdown(md);
  };

  return (
    <SplitPane className='App' split='vertical' minSize={220}>
      <div>Notes</div>
      <SplitPane defaultSize='50%' minSize={100}>
        <div className='editor-pane'>
          <Editor
            className='editor'
            markdown={markdown}
            onChange={onMarkdownChange}
          />
        </div>
        <div className='view-pane'>
          <ReactMarkdown
            className='result'
            source={markdown}
            renderers={{ code: CodeBlock }}
          />
        </div>
      </SplitPane>
    </SplitPane>
  );
}

export default App;
