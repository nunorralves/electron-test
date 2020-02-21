import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = props => {
  const { language, value } = props;
  // console.log(props);
  // console.log("language", props.language);
  // console.log("value", props.value);

  // color: rgb(169, 183, 198);
  //   font-family: Consolas, Monaco, "Andale Mono", monospace;
  //   direction: ltr;
  //   text-align: left;
  //   white-space: pre;
  //   word-spacing: normal;
  //   word-break: normal;
  //   line-height: 1.5;
  //   tab-size: 4;
  //   hyphens: none;
  //   float: left;
  //   padding-right: 10px;

  return (
    <SyntaxHighlighter
      language={language}
      style={darcula}
      // showLineNumbers={true}
      // startingLineNumber={0}
      wrapLines={true}
      // lineNumberContainerProps={{
      //   style: { float: "left", fontSize: "0.8rem", paddingRight: "0.8rem", lineHeight: '1.5rem'}
      // }}
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
