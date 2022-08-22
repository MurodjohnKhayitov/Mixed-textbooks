import React, { useState, useEffect } from "react";

export default function ChangeHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("flovia");
  const [time, settime] = useState(0);
  useEffect(
    () => {
      // ComponentDidMount
      console.log(`Hi ${name} your are ${count} time clicked`);
      document.title = name + " " + count;

      return (
        // ComponentWillUnMount
        console.log('cleanUp')
      );
    },
    // ComponentDidUpdate
    [count, name]
  );
  useEffect(
    () => {
      // ComponentDidMount
    //   console.log(`Hi ${name} your are ${count} time clicked`);
      document.title = time 
       const interval = setInterval(()=>{
        settime(time+1)

      },1000)

      return (
        // ComponentWillUnMount
        clearInterval(interval)
        
      );
    },
    // ComponentDidUpdate
    [time]
  );


  return (
    <div>
        {/* {time ? <h2>Hello</h2>:<h2>Loading...</h2>} */}
      <div>
        <button onClick={() => setCount(count + 1)}>Counter+</button>
        <button onClick={() => setName(name === "flovia" ? "Roger" : "flovia")}>
          Change+
        </button>
      </div>
    </div>
  );
}
