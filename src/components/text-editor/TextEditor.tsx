import ReactQuill, { Quill } from "react-quill";
import { useData } from "@/hooks/useData";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Font: any = Quill.import("formats/font");

Font.whitelist = [
  "Ubuntu",
  "Raleway",
  "Roboto",
  "UN-Arjuna",
  "UN-Baron",
  "UN-basuru",
  "UN-Siri",
  "test",
];
Quill.register(Font, true);

function TextEditor() {
  const { setStory, story, background } = useData();

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ size: ["small", false, "large", "huge"] }],
    // [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ font: Font.whitelist }],
    [{ align: [] }],
    ["image"],
    ["clean"],
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  const handleChange = async (value: string) => {
    setStory(value);
  };

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={story}
        onChange={handleChange}
        modules={modules}
        className="h-[90%] bg-slate-100"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
}

export default TextEditor;
