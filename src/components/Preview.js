import React from 'react';
import ReactMarkdown from 'react-markdown';

const Preview = ({text}) => {  

  return (
    <>
        <h2>Preview</h2>
        <div id="preview">
          <ReactMarkdown>{text}</ReactMarkdown> 
        </div>
          
    </>
  )
};

export default Preview;