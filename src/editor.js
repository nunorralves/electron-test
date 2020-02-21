import React from "react";
import CodeMirror from "@skidding/react-codemirror";
require("codemirror/lib/codemirror.css");
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/python/python");
require("codemirror/mode/xml/xml");
require("codemirror/mode/markdown/markdown");
require("codemirror/theme/monokai.css");

const Editor = props => {
  console.log(props);
  var options = {
    mode: "markdown",
    theme: "monokai",
    lineNumbers: true,
    viewportMargin: Infinity
  };

  return (
    <CodeMirror
      value={props.codeText}
      options={options}
      styles={{ "background-color": "red", height: "500px" }}
    />
  );
};

export default Editor;
