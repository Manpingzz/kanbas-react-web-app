import React, { useState } from "react";

function Counter() {
  const[count, setCount] = useState(7)
//   let count = 7;
  console.log(count);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button className="btn btn-success"
        onClick={() => { setCount(count + 1); console.log(count); }}>
        Up
      </button>
      <button className="btn btn-danger"
        onClick={() => { setCount(count - 1); console.log(count); }}>
        Down
      </button>
    </div>
  );
}
export default Counter;

