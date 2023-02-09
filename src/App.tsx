import { useState } from "react";
import "./tailwind.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App text-3xl underline ">
      <button className="btn btn-primary">Pulttaegi</button>
      <div>포크푸시</div>
    </div>
  );
}

export default App;
