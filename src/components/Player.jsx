// << refs >>
// By using a ref, you ensure that:
// You can store information between re-renders (unlike regular variables, which reset on every render).
// Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).
// The information is local to each copy of your component (unlike the variables outside, which are shared).

import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  const handleClick = () => {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  };

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

// Without using refs

// import { useState } from "react";

// export default function Player() {
//   const [enteredPlayerName, setEnteredPlayerName] = useState(null);
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setSubmitted(false);
//     setEnteredPlayerName(e.target.value);
//   };

//   const handleClick = () => {
//     setSubmitted(true);
//   };
//   return (
//     <section id="player">
//       <h2>Welcome {submitted ? enteredPlayerName : "unknown entity"}</h2>
//       <p>
//         <input type="text" value={enteredPlayerName} onChange={handleChange} />
//         <button onClick={handleClick}>Set Name</button>
//       </p>
//     </section>
//   );
// }
