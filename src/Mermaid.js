import React, { useState, useEffect } from "react";
import mermaid from "mermaid";

const DEFAULT_CONFIG = {
  startOnLoad: true,
  theme: "forest",
  logLevel: "fatal",
  securityLevel: "strict",
  arrowMarkerAbsolute: false,
  flowchart: {
    htmlLabels: true,
    curve: "linear"
  },
  sequence: {
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    mirrorActors: true,
    bottomMarginAdj: 1,
    useMaxWidth: true,
    rightAngles: false,
    showSequenceNumbers: false
  },
  gantt: {
    titleTopMargin: 25,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    fontFamily: '"Open-Sans", "sans-serif"',
    numberSectionStyles: 4,
    axisFormat: "%Y-%m-%d"
  }
};

const Mermaid = props => {
  const { name, chart, config } = props;
  const [graph, setGraph] = useState("");
  console.log("name/chart/config", name, chart, config);
  mermaid.initialize({
    ...DEFAULT_CONFIG,
    ...config
  });

  // mermaid.parseError = function(err, hash) {
  //   console.log("ERROR", err);
  // };

  // var element = document.getElementById("mer");

  useEffect(() => {
    mermaid.contentLoaded();
  }, []);

  try {
    mermaid.parse(chart);
    if (graph !== chart) setGraph(chart);
  } catch (err) {
    // console.log("ERROR CATCH:", err);
    return null;
  }
  // mermaid.parseError = function(err, hash) {
  //   console.log("ERROR:", err, hash);
  // };

  return (
    <div className='mermaid' name={name}>
      {graph}
    </div>
  );
};

export default Mermaid;
