import React, { useEffect, useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";
export default function PostMethod2() {
  const [getUser, setGetUser] = useState([]);
  const [loader, setLoader] = useState(true);
  const [name, setName] = useState();
  const [year, setYear] = useState();
  const url = 'https://reqres.in/api/users"';
  useEffect(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => {
        setLoader(false);
        setGetUser(data.data);
      })
      .catch((err) => console.log(err, "GetError"));
  }, []);
  console.log(getUser, "user");
  const OnAdd = () => {
    setName("");
    setYear("");
    fetch(`${url}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ name: name, year: year })
    })
      .then((res) => res.json())
      .then((data) => setGetUser((getUser) => [...getUser, data]))
      .catch((err) => console.log(err, "PostError"));
  };
  const onDelete = (id) => {
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
        console.log(err, "DeleteEror");
      });
  };
  return (
    <div style={{ margin: "auto" }}>
      <div>
        <input
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <input
          type={"text"}
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="job"
        />
        <button onClick={OnAdd}>Send Data</button>
      </div>

      {loader ? (
        <div>
          <PuffLoader size={100} color={"#2C0091"} loading={loader} />
          <p> Sayt Test Rejimida Ishlamoqda!</p>
        </div>
      ) : (
        <div>
          {getUser.map((item) => {
            return (
              <tr>
                <td>
                  <b>Name:</b>
                  {item.name}
                </td>
                <td>
                  <b>Year:</b>
                  {item.year}
                </td>
                <td>
                  <button onClick={() => onDelete(item.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </div>
      )}
    </div>
  );
}
