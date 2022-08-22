import React, { useState } from "react";
import axios from "axios";
export default function PostData1() {
  const [name, setName] = useState();
  const [job, setJob] = useState();
  const [info, setInfo] = useState([]);
  const url = "https://reqres.in/api/users";
  const onSubmit = (e) => {
    e.preventDefault();
    setName("");
    setJob("");
    // console.log(name, job);
    // axios
    //   .post(`${url}`, {
    //     headers: { "Content-type": "application/json" },
    //     body: JSON.stringify({ name: name, job: job })
    //   })
    //   .then((res) => {
    //     setInfo(res);
    //     console.log(res, "Res");
    //   })
    //   .catch((err) => {
    //     console.log(err, "Err");
    //   });
    fetch(`${url}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ name: name, job: job })
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setInfo(data)
      })
      .catch((err) => {
        console.log(err);
      });
      console.log(info);
  };
  return (
    <div>
      <input
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type={"text"}
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <button onClick={onSubmit}>Send Data</button>
        <div>
          <h2>Id: {info.id}</h2>
          <h2>Name: {info.name}</h2>
          <h2>Job: {info.job}</h2>
          <h2>СreatedAt: {info.createdAt}</h2>
        </div>
    </div>
  );
}
