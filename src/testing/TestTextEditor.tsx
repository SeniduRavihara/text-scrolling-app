// /**
//  * Copyright (c) Meta Platforms, Inc. and affiliates.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  *
//  */
// import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
// import { LexicalComposer } from "@lexical/react/LexicalComposer";
// import { ContentEditable } from "@lexical/react/LexicalContentEditable";
// import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
// import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
// import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";

// import ExampleTheme from "./ExampleTheme";
// import ToolbarPlugin from "./plugins/ToolbarPlugin";
// import TreeViewPlugin from "./plugins/TreeViewPlugin";
// import MyOnChangePlugin from "./plugins/MyOnChangePlugin";
// import { useEffect, useState } from "react";

// function Placeholder() {
//   return <div className="editor-placeholder">Enter some rich text...</div>;
// }

// const editorConfig = {
//   namespace: "React.js Demo",
//   nodes: [],
//   // Handling of errors during update
//   onError(error: Error) {
//     throw error;
//   },
//   // The editor theme
//   theme: ExampleTheme,
// };

// export default function TestTextEditor() {
//    const [editorState, setEditorState] = useState("");
   
//    useEffect(() => {
//     console.log(editorState);
    
//    },[editorState])

//   function onChange(editorState) {
//     // Call toJSON on the EditorState object, which produces a serialization safe string
//     const editorStateJSON = editorState.toJSON();
//     // However, we still have a JavaScript object, so we need to convert it to an actual string with JSON.stringify
//     setEditorState(JSON.stringify(editorStateJSON));
//   }



//   return (
//     <LexicalComposer initialConfig={editorConfig}>
//       <div className="editor-container text-black">
//         <ToolbarPlugin />
//         <div className="editor-inner">
//           <RichTextPlugin
//             contentEditable={<ContentEditable className="editor-input" />}
//             placeholder={<Placeholder />}
//             ErrorBoundary={LexicalErrorBoundary}
//           />
//           <HistoryPlugin />
//           <AutoFocusPlugin />
//           <TreeViewPlugin />
//           <MyOnChangePlugin onChange={onChange} />
//         </div>
//       </div>
//     </LexicalComposer>
//   );
// }
