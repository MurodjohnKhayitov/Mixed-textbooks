import React, { useState } from "react";
import "./style.css";

import SignIn from "../Registration/SignIn";
import SignUp from "../Registration/SignUp";

export default function Auth() {
  const [count, setCount] = useState(false);

  const SignIN = () => {
    setCount(true);
  };
  const SinUP = () => {
    setCount(false);
  };
  

  return (
    <div className="main">
      {count ? <SignIn /> : <SignUp />}
      {count ? (
        <button className="inc" onClick={SinUP}>
          Ruyhatdan utish
        </button>
      ) : (
        <button className="din" onClick={SignIN}>
          Kirish
        </button>
      )}
    </div>
  );
}
