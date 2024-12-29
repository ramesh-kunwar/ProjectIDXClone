import { create } from "zustand";

export const useActiveFileTabStore = create((set) => {
  return {
    activeFileTab: null, // initially null
    setActiveFileTab: (path, value, extension) => {
      set({
        activeFileTab: {
          path: path, // path to the file   eg: /src/file1.js
          value: value, // content of the file eg: file1.js
          extension: extension, // extension of the file eg: js
        },
      });
    },
  };
});
