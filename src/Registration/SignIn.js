import React, { useState } from "react";
import "./Signin.css";

export default function SignIn() {
  const [mail, setMail] = useState();
  const [passwrd, setPasswrd] = useState();
  const handlePassword = (e) => {
    setPasswrd(e.target.value);
  };
  const handleEvent = (e) => {
    e.preventDefault();
    alert(`sizning emailingiz ${mail} va parolingiz ${passwrd}`);
    setMail("");
    setPasswrd("");
  };
  return (
    <div className="SignIn">
      <form>
        <input
          type={"email"}
          name="email"
          placeholder="Your email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          type={"password"}
          name="password"
          placeholder="Your password"
          value={passwrd}
          onChange={handlePassword}
        />
        <button onClick={handleEvent}>Log In</button>
      </form>
    </div>
  );
}
