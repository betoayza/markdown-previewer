import React, { useState, useEffect } from "react";
import Preview from "./Preview";

const Editor = () => {
  const [text, setText] = useState('');

  const file='initialText.md';

  useEffect(() => {
    import(`../markdown/${file}`) 
      .then(res=>{
          console.log(res);
          console.log(res.default);
          fetch(res.default)
          .then(res=>res.text())
          .then(res=>{
            console.log(res);
            setText(res);
          })  
          .catch(error=>error)        
      })
      .catch(error=>error)
  }, [])  

  const handleChange = (e) => {    
    setText(e.target.value);
  };

  return (
    <>
      <h2>Editor</h2>
      <textarea id="editor" value={text} onChange={handleChange} />
      <Preview text={text} />
    </>
  );
};

export default Editor;
