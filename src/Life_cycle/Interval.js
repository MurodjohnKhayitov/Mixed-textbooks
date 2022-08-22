import React, { useEffect, useState } from "react";

export default function Interval() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("flovio");
  const [userName, setUserName] = useState("");
  const [ism, setIsm] = useState("");



  const handleEvent = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div>
        <p>
          Hi {name} you clicked {count} times
        </p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <button onClick={() => setName(name === "Flavio" ? "Roger" : "Flavio")}>
          Change name
        </button>
      </div>
      <div>
        <input
          type={"text"}
          value={ism}
          onChange={(e) => setIsm(e.target.value)}
        />
        <input
          type={"text"}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleEvent}>Send Form</button>
      </div>
      <div>
        <h3>Name: {ism}</h3>
        <h3>userName: {userName}</h3>
      </div>
    </div>
  );
}
