import React, { useEffect, useState } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
const EditorComponent = () => {
  const [editorState, setEditorState] = useState({
    theme: null,
  });

  async function downloadTheme() {
    try {
      const response = await fetch("/Dracula.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setEditorState({
        ...editorState,
        theme: data,
      });
    } catch (error) {
      console.error("Error fetching theme:", error);
    }
  }

  function handleEditorTheme(editor, monaco) {
    monaco.editor.defineTheme("dracula", editorState.theme);
    monaco.editor.setTheme("dracula");
  }
  useEffect(() => {
    downloadTheme();
  }, []);
  return (
    <div>
      {editorState.theme && (
        <Editor
          height="90vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          options={{
            fontSize: 18,
            fontFamily: "monospace",
          }}
          onMount={handleEditorTheme}
        />
      )}
    </div>
  );
};

export default EditorComponent;
