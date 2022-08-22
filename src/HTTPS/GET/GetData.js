import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
export default function GetData() {
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res, "Res");
        setUsers(res.data);
        setLoad(false);
      })
      .catch((err) => {
        console.log(err, "Error");
      });
      
  }, []);
  const onDelete = (id) => {
 
    console.log(id, "BuDeleteId");
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log("Deleted!!!", res);
      })
      .catch((err) => {
        console.log(err, "Error");
      });
  };
  
  console.log(users, "bu state user");
  return (
    <>
      {users.map((item) => {
        return (
          <tr style={{ border: "1px solid black" }}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
            <td>
              <button onClick={() => onDelete(item.id)}>Delete</button>
            </td>
          </tr>
        );
      })}
    </>
  );
}
