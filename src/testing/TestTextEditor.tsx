import React from "react";
import ReactQuill from "react-quill";
import "./style.css"

const Quill = ReactQuill.Quill;
var Font = Quill.import("formats/font");
Font.whitelist = ["Ubuntu", "Raleway", "Roboto"];
Quill.register(Font, true);


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

export class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: "", theme: "snow" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }

  handleThemeChange(newTheme) {
    if (newTheme === "core") newTheme = null;
    this.setState({ theme: newTheme });
  }

  render() {
    return (
      <div>
        <ReactQuill
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.state.editorHtml}
          modules={Editor.modules}
          formats={Editor.formats}
          bounds={".app"}
          placeholder={this.props.placeholder}
        />
        <div className="themeSwitcher">
          <label>Theme </label>
          <select onChange={(e) => this.handleThemeChange(e.target.value)}>
            <option value="snow">Snow</option>
            <option value="bubble">Bubble</option>
            <option value="core">Core</option>
          </select>
        </div>
      </div>
    );
  }
}

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: Font.whitelist }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

