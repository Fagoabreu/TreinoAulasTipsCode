import { useState } from "react";
import "./styles.css";

function App() {
  const [timeNow, setTime] = useState(getTimeNow());

  function updateTime() {
    setTime(getTimeNow());
  }

  function getTimeNow() {
    return new Date().toLocaleTimeString();
  }

  setInterval(updateTime, 1000);

  return (
    <div className="App">
      <h1>Tempo: {timeNow}</h1>
    </div>
  );
}

export default App;
