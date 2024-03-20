import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function TextEditor() {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log(value);
    
  },[value])

  return (
    <div>
      <ReactQuill theme="snow" value={value} onChange={setValue} />

      <div dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
}

export default TextEditor