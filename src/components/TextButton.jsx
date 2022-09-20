import React from "react";

const TextButton = ({ random, setRandom }) => {
  return (
    <div>
      <p style={{ color: random > 80 ? "green" : "violet" }}>I'm {random}</p>
      <button onClick={() => setRandom(0)}>Reset</button>
    </div>
  );
};

export default TextButton;
