// import { useState } from "react";
// import "../Demo/Demo.css";
// import React from "react";
// import { useReducer } from "react";

// const Demo = () => {
//   const [name, setName] = useState("Sudhahar");
//   const [nameState, setNameState] = useState("Kavin");
//   const [steps, setSteps] = useState(0);
//   function changeName() {
//     if (nameState === "Kavin") {
//       setNameState("Sudhahar");
//     } else {
//       setNameState("Kavin");
//     }
//     console.log("clicked!");
//   }
//   const increment = () => {
//     return setSteps(steps + 1);
//   };
//   const decrement = () => {
//     return setSteps(steps - 1);
//   };
//   function counterReducer(state, action) {
//     switch (action.type) {
//       case "INCREMENT":
//         return { count: state.count + 1 };
//       case "DECREMENT":
//         return { count: state.count - 1 };
//       case "Reset":
//         return { count: 0 };
//       default:
//         throw new Error();
//     }
//   }
//   function Counter() {
//     const [count,setCount]=useState(0)
//     const increment=()=>{
//       setCount(prevCount=>prevCount+1)
//     }
//     const decrement=()=>{
//       setCount(prevCount=>prevCount-1)
//     }
//   }
//   // Initializing state using useReducer
//   const [state, dispatch] = useReducer(counterReducer, { count: 0 });
//   return (
//     <div>
//       <div className="react-examples">
//         <div className="App">
//           <div>Hello, {nameState}</div>
//           <button onClick={changeName}>Click me</button>
//         </div>
//         <hr></hr>
//         <button onClick={increment}>+</button>
//         <div>{steps}</div>
//         <button onClick={decrement}>-</button>
//         <hr></hr>

//         {/* useReducer */}
//         <h1>{state.count}</h1>
//         <button onClick={() => dispatch({ type: "INCREMENT" })}>
//           Increment
//         </button>
//         <button onClick={() => dispatch({ type: "DECREMENT" })}>
//           Decrement
//         </button>
//         <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>

//         {/* useref */}
//         <p>Count: {count}</p>
//         <button onClick={increment}>Increment</button>
//         <button onClick={decrement}>Decrement</button>
//       </div>
//     </div>
//   );
// };

// export default Demo;

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // Using functional update approach to access previous state
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    // Using functional update approach to access previous state
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
