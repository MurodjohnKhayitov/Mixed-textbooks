import React, { useState } from "react";
import "./SignUp.css";
export default function SignUp() {
  const [fullName, setFullName] = useState();
  const [mail, setMail] = useState();
  const [passwrd, setPasswrd] = useState();

  const handleFirstname = (event) => {
    setFullName(event.target.value);
  };
  const handleEmail = (e) => {
    setMail(e.target.value);
  };
  const handlePassword = (e) => {
    setPasswrd(e.target.value);
  };
  
  const handleEvent = (event) => {
    event.preventDefault();
    console.log(fullName);
    console.log(mail);
    console.log(passwrd);
    setFullName("");
    setMail("");
    setPasswrd("");
  };
  return (
    <div className="SignUp">
      <form>
        <p>
          <input
            type={"text"}
            name="lname"
            placeholder="You Name"
            value={fullName}
            onChange={handleFirstname}
          />
        </p>
        <p>
          <input
            type={"email"}
            name="email"
            placeholder="You email"
            value={mail}
            onChange={handleEmail}
          />
        </p>
        <p>
          <input
            type={"password"}
            name="password"
            placeholder="You password"
            value={passwrd}
            onChange={handlePassword}
          />
        </p>
        <button onClick={handleEvent}>Sign Up</button>
      </form>
    </div>
  );
}
