import React from "react";
import ReactMarkdown from "react-markdown";

const Preview = ({ text }) => {
  console.log("El nuevo texto es: ", text);
  console.log("El texto pasado original es: ", text);
  text = text.replace(/\n|\r/g, "  \n");

  return (
    <>
      <h2 id="preview-h2">Preview</h2>
      <div id="preview">
        <ReactMarkdown children={text} />
      </div>
    </>
  );
};

export default Preview;
