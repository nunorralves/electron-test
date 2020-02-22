import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SplitPane from "react-split-pane";
import Editor from "./editor.js";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";
import { Sidebar } from "./components/Sidebar/Sidebar";
import Mermaid from "./Mermaid";

function App() {
  const text = `
  # xpto

  \`\`\`javascript
  const function = () =>{\n}
  \`\`\`

  \`\`\`mermaid\ngraph TB\na-->b\`\`\`
  `;
  const [markdown, setMarkdown] = useState(
    // "# xpto\n\n```javascript\nconst function = () =>{\n}\n```\n\n```mermaid graph TD A-->B```"
    text
  );
  const graph = `
graph TD
    A-->B
    A-->C
    B-->D
    C-->D
`;

  const onMarkdownChange = md => {
    setMarkdown(md);
  };

  return (
    <SplitPane className='App' split='vertical' minSize={200}>
      <Sidebar />
      <SplitPane defaultSize={200} minSize={100}>
        <div>notes</div>
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
              renderers={{
                code: ({ language, value }) => {
                  //console.log("lang", language, value);
                  return language === "mermaid" ? (
                    <Mermaid
                      name='graph1'
                      chart={value}
                      config={{
                        theme: "forest"
                      }}
                    />
                  ) : (
                    <CodeBlock language={language} value={value} />
                  );
                }
              }}
            />
          </div>
        </SplitPane>
      </SplitPane>
    </SplitPane>
  );
}

export default App;
