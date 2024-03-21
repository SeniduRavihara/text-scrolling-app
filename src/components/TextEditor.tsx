import ReactQuill, { Quill } from "react-quill";
import { useData } from "@/hooks/useData";

// Define a custom font whitelist
const Font = Quill.import("formats/font");
Font.whitelist = ["Ubuntu", "Raleway", "Roboto", "test"];
Quill.register(Font, true);

function TextEditor() {
  const { setStory, story } = useData();

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: Font.whitelist }], // custom font dropdown
    [{ align: [] }],
    ["clean"], // remove formatting button
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={story}
        onChange={setStory}
        modules={modules}
        className="h-[90%] bg-slate-100"
      />
    </div>
  );
}

export default TextEditor;
