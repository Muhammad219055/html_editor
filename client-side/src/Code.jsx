import React from "react";
import Play from "./assets/Play";
const Code = ({value,handleSubmittingCode, setValue}) => {

  return (
    <div className="code-editor">
      <div className="welcome-and-run-button">
        <h1>HTML Editor.</h1>
        <button 
        onClick={handleSubmittingCode}
        className="run-button">
          <Play />
        </button>
      </div>
      <textarea
        name="html-code"
        id="html-code"
        placeholder="write your html here..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Code;
