import { useState } from "react";
import Code from "./Code";
import axios from 'axios'

function App() {
  const [value, setValue] = useState("");
  const [joggy, setJoggy] = useState(false)
  const handleSubmittingCode = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4000/compile`, { code: value });

    setJoggy((prev)=>!prev);
  };

  return (
    <div className="both-screens-container">
      <Code 
      value={value}
      handleSubmittingCode = {handleSubmittingCode}
      setValue = {setValue}
      />
      <iframe
        src="http://localhost:4000"
        className="output"
        frameBorder="0"
        key={joggy}
      ></iframe>
    </div>
  );
}

export default App;
