import React, { useEffect, useState } from "react";
import axios from "axios";
export default function GetUser() {
  const [user, setuser] = useState([]);

  //   useEffect(() => {
  //     axios.get("https://jsonplaceholder.typicode.com/uers").then((res) => {
  //       console.log(res.data);
  //       console.log(res.status);
  //       if(res.status === 200){
  //         alert(`status code: ${res.status}`)
  //       }
  //     }).catch(err=>{
  //         console.log(err.response.status);
  //         if(err.response.status){
  //             alert("de")
  //         }
  //     }) 
  //   }, []);
//   -----------------------
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   }, []);

  return <div></div>;
}
