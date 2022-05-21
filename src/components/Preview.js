import React from "react";
import ReactMarkdown from "react-markdown";

const Preview = ({ text }) => {
  // const [newText, setNewText] = useState(text);
  console.log("El texto pasado es: ", text);

  // useEffect(() => {
    //let replacedText = text.replace("\n", "");
    // setNewText(replacedText);
  // }, [text]);

  return (
    <>
      <h2>Preview</h2>
      <div id="preview">       
          <ReactMarkdown children={text} />        
      </div>
    </>
  );
};

export default Preview;
