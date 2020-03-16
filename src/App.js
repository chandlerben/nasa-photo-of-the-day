import React from "react";
import "./App.css";
import NASA from './components/NASA'


function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img">🚀</span>!
      </p>
      <NASA />
    </div>
  );
}

export default App;
