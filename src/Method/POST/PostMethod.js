import React, { useEffect, useState } from "react";

export default function PostMethod() {
  const [postUser, setPostUser] = useState([]);
  const [getUser, setGetUser] = useState([]);
  const [name1, setName] = useState();
  const [job1, setJob] = useState();
  const [userId, setUserId] = useState();
  const [load, setload] = useState(true);
  const url = "https://reqres.in/api/users";
  useEffect(() => {
    GetData();
  }, []);
  const GetData = async () => {
    await fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => setGetUser(data.data))
      .catch((err) => console.log(err, "GetUserError"));
  };
  console.log(getUser);

  const OnAdd =  () => {
    setName("");
    setJob("");
     fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ name: name1, email: job1 })
    })
      .then((res) => res.json())
      .then((data) => {
        setGetUser((getUser) => [...getUser, data]);
      })
      .catch((err) => {
        console.log(err, "PostuserError");
      });
  };
  const onDelete = (id) => {
    console.log(id, "id");
    fetch(`${url}/${id}`, {
      method: "DELETE"
    })
      .then((res) =>
        setGetUser(
          getUser.filter((item) => {
            return item.id !== id;
          })
        )
      )
      .catch((err) => {
        console.log(err, "DeleteMethod");
      });
  };
  const OnSelect = (id) => {
    let item = getUser[id - 1];
    console.log(item, "edit");
    setName(item.name);
    setJob(item.email);
    setUserId(item.id);
  };
  const OnEdit = () => {
    fetch(`${url}/${userId}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ name: name1, email: job1 })
    })
      .then((res) => res.json())
      .then((data) => setGetUser(data))
      .catch((err) => {
        console.log(err, "ChangeAPi");
      });
  };
  console.log(userId,"id");
  return (
    <div style={{ textAlign: "center" }}>
      <input
        type={"text"}
        value={name1}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <input
        type={"email"}
        value={job1}
        onChange={(e) => setJob(e.target.value)}
        placeholder="job"
      />
      <button onClick={OnAdd}>Send Data</button>
      <button onClick={OnEdit}>change Data</button>
      {getUser.map((item) => {
        return (
          <tr style={{ border: "1px solid black" }} key={item.id}>
            <td>-{item.id}-</td>
            <td>-{item.email}-</td>
            <td>-{item.first_name}-</td>
            <td>-{item.last_name}-</td>
            <td>
              <button onClick={() => onDelete(item.id)}>Delete</button>
            </td>
            <td>
              <button onClick={() => OnSelect(item.id)}>Edit</button>
            </td>
          </tr>
        );
      })}
    </div>
  );
}
