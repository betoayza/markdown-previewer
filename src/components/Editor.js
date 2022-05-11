import React, {useState} from 'react';
import Preview from './Preview';

const Editor = () => {

    const [text,setText] = useState('');

    const handleChange=e=>{
      setText(e.target.value);
    };  
  return (
    <>
        <h2>Editor</h2>
        <textarea id="editor" onChange={handleChange} />
        <Preview text={text} />
    </>
  )
}

export default Editor;