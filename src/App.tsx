import React from "react";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter counterName="First Lock" code={9} />
      <Counter counterName="Second Lock" code={1} />
      <Counter counterName="Third Lock" code={4} />
    </div>
  );
}

export default App;
