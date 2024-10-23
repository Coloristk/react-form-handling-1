import "./App.css";
import { useState } from "react";

function App() {
  const [displayText, setDisplayText] = useState("Greeting Message");
  const [inputText, setInputText] = useState("");

  const handleDisplay = () => {
    setDisplayText(inputText);
  };

  const handleInputText = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="App">
      <div className="greeting-container">{displayText}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={inputText}
          onChange={handleInputText}
        />
      </div>

      <div className="buttons">
        <button onClick={handleDisplay}>Update text</button>
      </div>
    </div>
  );
}

export default App;
