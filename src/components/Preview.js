import React from 'react';

const Preview = ({text}) => {  

  return (
    <>
        <h2>Preview</h2>
        <textarea id="preview" value={text} />
    </>
  )
};

export default Preview;