import { useState, useRef } from "react";

export default function Player() {
  // useRef is used to create a mutable ref object that persists for the full lifetime of the component
  // useRef is not reactive, so it won't cause a re-render when its value changes
  const playerNameRef = useRef(null);

  const [playerName, setPlayerName] = useState(null);

  function handleClick() {
    setPlayerName(playerNameRef.current.value);
    playerNameRef.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input
          ref={playerNameRef}
          type="text"
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
