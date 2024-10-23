import { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInput] = useState("");
  const [updateMessage, setUpdateText] = useState("Greeting Message");

  const UpdateInput = () => {
    setUpdateText(inputText); // อัปเดตข้อความเมื่อเรียกใช้
  };

  return (
    <div className="App">
      <div className="greeting-container">{updateMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          value={inputText}
          onChange={(event) => setInput(event.target.value)}
          type="text"
        />
      </div>

      <div className="buttons">
        <button onClick={UpdateInput}>Update text</button>
      </div>
    </div>
  );
}

export default App;
