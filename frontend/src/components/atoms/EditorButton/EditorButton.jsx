import React from "react";

const EditorButton = ({ isActive }) => {
  function handleClick() {
    // todo - implement click handler
  }
  return (
    <button
      onClick={handleClick}
      className={
        isActive
          ? "bg-gray-700 text-white rounded-sm px-4 py-2 border-black border-t-2"
          : "bg-gray-500 text-white rounded-sm px-4 py-2"
      }
    >
      File.js
    </button>
  );
};

export default EditorButton;
