import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import If from "./components/If";
import Switch from "./components/Switch";
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

      <div style={{ marginTop: "10px" }}>
        <Switch predicate={15}>
          <Switch.case value={60}>I'm 60</Switch.case>
          <Switch.case value={50}>I'm half way there</Switch.case>
          <Switch.case value={40}>Im 40</Switch.case>
          <Switch.case value={30}>Im 20</Switch.case>
          <Switch.case value={10}>Im 10</Switch.case>
          <Switch.default>What am I?</Switch.default>
        </Switch>
      </div>

      <div style={{ marginTop: "10px" }}>
        <Counter>
          <Counter.increment />
          <Counter.display />
          <Counter.decrement />
          <Counter.reset />
        </Counter>
      </div>
    </div>
  );
}

export default App;
