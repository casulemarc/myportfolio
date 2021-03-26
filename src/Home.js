import React from "react";

function Hello() {
const sayHi = () => {
    console.log("Hello");
};

  return (
      <div>
        <h1>Hello There</h1>
        <button onClick = {sayHi}>Click Me</button>
      </div>
  );
}

export default Hello;
