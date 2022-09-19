import { useState } from "react";
import "./App.css";
import If from "./components/If";
import TextButton from "./components/TextButton";

function App() {
  const [random, setRandom] = useState(Math.random() * 100);
  return (
    <div
      style={{ display: "flex", height: "inherit", flexDirection: "column" }}
    >
      <If predicate={random <= 50}>
        <If.then>
          <p style={{ color: random < 40 ? "blue" : "red" }}>I'm {random}</p>
        </If.then>
        <If.else>
          {" "}
          <TextButton random={random} setRandom={setRandom} />
        </If.else>
      </If>
      <button
        onClick={() => setRandom(Math.random() * 100)}
        style={{ width: "50%" }}
      >
        Randomize
      </button>
    </div>
  );
}

export default App;
