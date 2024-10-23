import "./App.css";
import { useState } from "react";
function App() {
  const [inputmessage, setInputMessage] = useState(" ");
  const [showMessage, setShowMessage] = useState("Greeting Message");
  const handleINputMesage = (event) => {
    setInputMessage(event.target.value);
  };
  const handleShowMsg = () => {
    setShowMessage(inputmessage);
    setInputMessage(" ");
  };
  return (
    <div className="App">
      <div className="greeting-container">{showMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={inputmessage}
          onChange={handleINputMesage}
        />
      </div>

      <div className="buttons">
        <button onClick={handleShowMsg}>Update text</button>
      </div>
    </div>
  );
}

export default App;
